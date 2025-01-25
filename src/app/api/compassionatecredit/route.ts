import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import CompassionateCreditModel from '../../../../models/CompassionateCreditModel';
import { v4 as uuidv4 } from 'uuid';
import uploadToS3  from "@/lib/s3Upload"

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    let idProof = formData.get('idProof') as File;
    let addressProof = formData.get('addressProof') as File;
    let incomeCertificate = formData.get('incomeCertificate') as File;
    
    let documentUrls = {
      idProof: '',
      addressProof: '',
      incomeCertificate: ''
    }; 

    const newUUID = uuidv4(); 
    
    const addressProofNewName = `${newUUID}.pdf`;
    addressProof = new File([addressProof], addressProofNewName, { type: addressProof.type });

    const idProofNewName = `${newUUID}.pdf`;
    idProof = new File([idProof], idProofNewName, { type: idProof.type });


    const incomeCertificateNewName = `${newUUID}.pdf`;
    incomeCertificate = new File([incomeCertificate], incomeCertificateNewName, { type: incomeCertificate.type });

    
    if (idProof) {
      documentUrls.idProof = await uploadToS3('compassionate-credit/id-proofs', idProofNewName, idProof);
    }
    
    if (addressProof) {
      documentUrls.addressProof = await uploadToS3('compassionate-credit/address-proofs', addressProofNewName, addressProof);
    }

    if (incomeCertificate) {
      documentUrls.incomeCertificate = await uploadToS3('compassionate-credit/income-certificates', incomeCertificateNewName, incomeCertificate);
    }

    // Create credit application data object
    const creditData = {
      _id:newUUID,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      monthlyIncome: formData.get('monthlyIncome'),
      familySize: formData.get('familySize'),
      reason: formData.get('reason'),
      references: formData.get('references'),
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
      'monthlyIncome',
      'familySize',
      'reason',
      'termsAccepted'
    ];

    for (const field of requiredFields) {
      if (!creditData[field as keyof typeof creditData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate document uploads
    if (!documentUrls.idProof || !documentUrls.addressProof || !documentUrls.incomeCertificate) {
      return NextResponse.json(
        { success: false, message: 'All required documents must be uploaded' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const credit = new CompassionateCreditModel(creditData);
    await credit.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        applicationId: credit._id,
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
