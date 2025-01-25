import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import DeliveryPartnerModel from '../../../../models/DeliveryPartnerModel';
import { v4 as uuidv4 } from 'uuid';
import uploadToS3 from "@/lib/s3Upload";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    let idProof = formData.get('idProof') as File;
    let vehicleInsurance = formData.get('vehicleInsurance') as File;
    
    const documentUrls = {
      idProof: '',
      vehicleInsurance: ''
    };
    

    const newUUID = uuidv4(); 
    
    const idProofNewName =  `${newUUID}.pdf`;
    idProof = new File([idProof], idProofNewName, { type: idProof.type });

    const vehicleInsuranceNewName =  `${newUUID}.pdf`;
    vehicleInsurance = new File([vehicleInsurance], vehicleInsuranceNewName, { type: vehicleInsurance.type });


    if (idProof) {
      documentUrls.idProof = await uploadToS3('delivery-partner-documents/id-proofs', idProofNewName ,idProof);
    }
    
    if (vehicleInsurance) {
      documentUrls.vehicleInsurance = await uploadToS3('delivery-partner-documents/vehicle-insurance', vehicleInsuranceNewName, vehicleInsurance);
    }

    // Create delivery partner data object
    const deliveryPartnerData = {
      _id : newUUID,
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
