import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import CatalystModel from '../../../../models/CatalystModel';
import { uploadToCloudinary } from "@/lib/cloudinaryConnect";


export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const idProof = formData.get('idProof') as File;
    const addressProof = formData.get('addressProof') as File;
    
    const documentUrls = {
      idProof: '',
      addressProof: ''
    };
    
    if (idProof) {
      documentUrls.idProof = await uploadToCloudinary(idProof, 'catalyst-documents/id-proofs');
    }
    
    if (addressProof) {
      documentUrls.addressProof = await uploadToCloudinary(addressProof, 'catalyst-documents/address-proofs');
    }

    // Create catalyst data object
    const catalystData = {
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
