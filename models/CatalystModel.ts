import mongoose from 'mongoose';

const catalystSchema = new mongoose.Schema({
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
  address: { 
    type: String, 
    required: true 
  },
  age: { 
    type: String, 
    required: true 
  },
  disabilityStatus: { 
    type: String, 
    enum: ['Visual', 'Physical', 'Hearing', 'Other', 'Prefer Not to Disclose'],
    default: 'Prefer Not to Disclose'
  },
  shopLocation: { 
    type: String, 
    required: true 
  },
  hasRetailExperience: { 
    type: Boolean, 
    default: false 
  },
  motivation: { 
    type: String, 
    required: true 
  },
  preferredContactMethod: { 
    type: String, 
    enum: ['Email', 'Phone'],
    required: true 
  },
  documents: {
    idProof: { 
      type: String,
      required: true 
    },
    addressProof: { 
      type: String,
      required: true 
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


export default mongoose.models.Catalyst || mongoose.model('Catalyst', catalystSchema); 