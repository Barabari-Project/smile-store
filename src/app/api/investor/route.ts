import { NextResponse } from "next/server";
import dbConnect from '@/lib/dbConnect';
import InvestorModel from '../../../../models/InvestorModel';
import { uploadToCloudinary } from "@/lib/cloudinaryConnect";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const businessRegistration = formData.get('businessRegistration') as File;
    const financialProof = formData.get('financialProof') as File;
    
    const documentUrls = {
      businessRegistration: '',
      financialProof: ''
    };
    
    if (businessRegistration) {
      documentUrls.businessRegistration = await uploadToCloudinary(businessRegistration, 'investor-documents/business-registration');
    }
    
    if (financialProof) {
      documentUrls.financialProof = await uploadToCloudinary(financialProof, 'investor-documents/financial-proof');
    }

    // Create investor data object
    const investorData = {
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
