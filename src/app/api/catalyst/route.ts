import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import CatalystModel from '../../../../models/CatalystModel';
import { v4 as uuidv4 } from 'uuid';
import uploadToS3  from "@/lib/s3Upload"

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    let idProof = formData.get('idProof') as File;
    let addressProof = formData.get('addressProof') as File;
    
    const documentUrls = {
      idProof: '',
      addressProof: ''
    };
    
    const newUUID = uuidv4(); 

    const addressProofNewName = `${newUUID}.pdf`;
    addressProof = new File([addressProof], addressProofNewName, { type: addressProof.type });

    const idProofNewName = `${newUUID}.pdf`;
    idProof = new File([idProof], idProofNewName, { type: idProof.type });


    if (idProof) {
      documentUrls.idProof = await uploadToS3('catalyst-documents/id-proofs', idProofNewName, idProof);
    }
    
    if (addressProof) {
      documentUrls.addressProof = await uploadToS3('catalyst-documents/address-proofs', addressProofNewName, addressProof);
    }

    // Create catalyst data object
    const catalystData = {
      _id : newUUID,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      age: formData.get('age'),
      disabilityStatus: formData.get('disabilityStatus'),
      shopLocation: formData.get('shopLocation'),
      hasRetailExperience: formData.get('hasRetailExperience') === 'true',
      motivation: formData.get('motivation'),
      preferredContactMethod: formData.get('preferredContactMethod'),
      documents: documentUrls,
      termsAccepted: formData.get('termsAccepted') === 'true',
      status: 'pending',
      applicationDate: new Date()
    };
    

    // Validate required fields
    const requiredFields = [
      '_id',
      'fullName', 
      'email', 
      'phone', 
      'address', 
      'age', 
      'shopLocation', 
      'motivation',
      'preferredContactMethod',
      'termsAccepted'
    ];

    for (const field of requiredFields) {
      if (!catalystData[field as keyof typeof catalystData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate document uploads
    if (!documentUrls.idProof || !documentUrls.addressProof) {
      return NextResponse.json(
        { success: false, message: 'Both ID proof and address proof documents are required' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const catalyst = new CatalystModel(catalystData);
    await catalyst.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        applicationId: catalyst._id,
        documents: documentUrls
      }
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
