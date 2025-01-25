import mongoose from "mongoose";

const compassionateCreditSchema = new mongoose.Schema(
  {
    _id: { 
      type: String, 
      required: true, 
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    monthlyIncome: {
      type: String,
      enum: ["Below ₹10,000", "₹10,000–₹20,000", "Above ₹20,000"],
      required: true,
    },
    familySize: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    references: {
      type: String,
    },
    documents: {
      idProof: {
        type: String,
        required: true,
      },
      addressProof: {
        type: String,
        required: true,
      },
      incomeCertificate: {
        type: String,
        required: true,
      },
    },
    termsAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    applicationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.CompassionateCredit ||
  mongoose.model("CompassionateCredit", compassionateCreditSchema);
