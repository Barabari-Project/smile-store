import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import EnablerModel from '../../../../models/EnablerModel';
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
      documentUrls.idProof = await uploadToCloudinary(idProof, 'enabler-documents/id-proofs');
    }
    
    if (addressProof) {
      documentUrls.addressProof = await uploadToCloudinary(addressProof, 'enabler-documents/address-proofs');
    }

    // Create enabler data object
    const enablerData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      storeLocation: formData.get('storeLocation'),
      spaceAvailable: formData.get('spaceAvailable'),
      hasPreviousExperience: formData.get('hasPreviousExperience') === 'true',
      investmentReadiness: formData.get('investmentReadiness'),
      motivation: formData.get('motivation'),
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
      'storeLocation', 
      'spaceAvailable',
      'investmentReadiness',
      'motivation',
      'termsAccepted'
    ];

    for (const field of requiredFields) {
      if (!enablerData[field as keyof typeof enablerData]) {
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
    const enabler = new EnablerModel(enablerData);
    await enabler.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        applicationId: enabler._id,
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
