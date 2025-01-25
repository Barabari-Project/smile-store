import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  _id: { 
    type: String, 
    required: true, 
  },
  fullName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true,
    unique: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  organizationName: { 
    type: String 
  },
  proposedInvestmentAmount: { 
    type: String,
    required: true 
  },
  interestAreas: {
    smileCatalyst: { 
      type: Boolean, 
      default: false 
    },
    smileEnabler: { 
      type: Boolean, 
      default: false 
    },
    smileDelivery: { 
      type: Boolean, 
      default: false 
    },
    compassionateCredit: { 
      type: Boolean, 
      default: false 
    }
  },
  motivation: { 
    type: String, 
    required: true 
  },
  documents: {
    businessRegistration: { 
      type: String 
    },
    financialProof: { 
      type: String 
    }
  },
  termsAccepted: { 
    type: Boolean, 
    required: true,
    default: false 
  },
  status: { 
    type: String, 
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending' 
  },
  applicationDate: { 
    type: Date, 
    default: Date.now 
  }
}, { 
  timestamps: true 
});


export default mongoose.models.Investor || mongoose.model('Investor', investorSchema); 