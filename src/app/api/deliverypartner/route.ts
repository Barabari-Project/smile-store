import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import DeliveryPartnerModel from '../../../../models/DeliveryPartnerModel';
import { uploadToCloudinary } from "@/lib/cloudinaryConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const idProof = formData.get('idProof') as File;
    const vehicleInsurance = formData.get('vehicleInsurance') as File;
    
    const documentUrls = {
      idProof: '',
      vehicleInsurance: ''
    };
    
    if (idProof) {
      documentUrls.idProof = await uploadToCloudinary(idProof, 'delivery-partner-documents/id-proofs');
    }
    
    if (vehicleInsurance) {
      documentUrls.vehicleInsurance = await uploadToCloudinary(vehicleInsurance, 'delivery-partner-documents/vehicle-insurance');
    }

    // Create delivery partner data object
    const deliveryPartnerData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      age: formData.get('age'),
      hasOwnVehicle: formData.get('hasOwnVehicle') === 'true',
      vehicleType: formData.get('vehicleType'),
      areaOfOperation: formData.get('areaOfOperation'),
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
      'address', 
      'age',
      'hasOwnVehicle',
      'vehicleType',
      'areaOfOperation',
      'motivation',
      'termsAccepted'
    ];

    for (const field of requiredFields) {
      if (!deliveryPartnerData[field as keyof typeof deliveryPartnerData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate document uploads
    if (!documentUrls.idProof || !documentUrls.vehicleInsurance) {
      return NextResponse.json(
        { success: false, message: 'Both ID proof and vehicle insurance documents are required' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const deliveryPartner = new DeliveryPartnerModel(deliveryPartnerData);
    await deliveryPartner.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        applicationId: deliveryPartner._id,
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
