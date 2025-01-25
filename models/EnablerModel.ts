import mongoose from 'mongoose';

const enablerSchema = new mongoose.Schema({
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
  storeLocation: { 
    type: String, 
    required: true 
  },
  spaceAvailable: { 
    type: String, 
    required: true 
  },
  hasPreviousExperience: { 
    type: Boolean, 
    default: false 
  },
  investmentReadiness: { 
    type: String,
    enum: ['Below ₹5 Lakh', '₹5-10 Lakh', 'Above ₹10 Lakh'],
    required: true 
  },
  motivation: { 
    type: String, 
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


export default mongoose.models.Enabler || mongoose.model('Enabler', enablerSchema); 