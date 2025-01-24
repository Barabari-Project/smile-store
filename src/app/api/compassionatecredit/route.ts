import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import CompassionateCreditModel from '../../../../models/CompassionateCreditModel';
import { uploadToCloudinary } from "@/lib/cloudinaryConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const idProof = formData.get('idProof') as File;
    const addressProof = formData.get('addressProof') as File;
    const incomeCertificate = formData.get('incomeCertificate') as File;
    
    const documentUrls = {
      idProof: '',
      addressProof: '',
      incomeCertificate: ''
    };
    
    if (idProof) {
      documentUrls.idProof = await uploadToCloudinary(idProof, 'compassionate-credit/id-proofs');
    }
    
    if (addressProof) {
      documentUrls.addressProof = await uploadToCloudinary(addressProof, 'compassionate-credit/address-proofs');
    }

    if (incomeCertificate) {
      documentUrls.incomeCertificate = await uploadToCloudinary(incomeCertificate, 'compassionate-credit/income-certificates');
    }

    // Create credit application data object
    const creditData = {
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
