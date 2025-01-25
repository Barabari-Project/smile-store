import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import InvestorModel from '../../../../models/InvestorModel';
import { v4 as uuidv4 } from 'uuid';
import uploadToS3 from "@/lib/s3Upload";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    let businessRegistration = formData.get('businessRegistration') as File;
    let financialProof = formData.get('financialProof') as File;
    
    const documentUrls = {
      businessRegistration: '',
      financialProof: ''
    };
    
    const newUUID = uuidv4(); 

    const businessRegistrationNewName =  `${newUUID}.pdf`;
    businessRegistration = new File([businessRegistration], businessRegistrationNewName, { type: businessRegistration.type });

    const financialProofNewName =  `${newUUID}.pdf`;
    financialProof = new File([financialProof], financialProofNewName, { type: financialProof.type });


    if (businessRegistration) {
      documentUrls.businessRegistration = await uploadToS3('investor-documents/business-registration',businessRegistrationNewName , businessRegistration);
    }
    
    if (financialProof) {
      documentUrls.financialProof = await uploadToS3('investor-documents/financial-proof', financialProofNewName, financialProof);
    }

    // Create investor data object
    const investorData = {
      _id : newUUID,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      organizationName: formData.get('organizationName'),
      proposedInvestmentAmount: formData.get('proposedInvestmentAmount'),
      interestAreas: {
        smileCatalyst: formData.get('smileCatalyst') === 'true',
        smileEnabler: formData.get('smileEnabler') === 'true',
        smileDelivery: formData.get('smileDelivery') === 'true',
        compassionateCredit: formData.get('compassionateCredit') === 'true'
      },
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
      'proposedInvestmentAmount',
      'motivation',
      'termsAccepted'
    ];

    for (const field of requiredFields) {
      if (!investorData[field as keyof typeof investorData]) {
        return NextResponse.json(
          { success: false, message: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate at least one interest area is selected
    const hasInterestArea = Object.values(investorData.interestAreas).some(value => value);
    if (!hasInterestArea) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one interest area' },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const investor = new InvestorModel(investorData);
    await investor.save();

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        applicationId: investor._id,
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
