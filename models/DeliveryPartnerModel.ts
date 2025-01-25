import mongoose from "mongoose";

const deliveryPartnerSchema = new mongoose.Schema(
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
    age: {
      type: String,
      required: true,
    },
    hasOwnVehicle: {
      type: Boolean,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["Two-Wheeler", "Four-Wheeler"],
      required: true,
    },
    areaOfOperation: {
      type: String,
      required: true,
    },
    motivation: {
      type: String,
      required: true,
    },
    documents: {
      idProof: {
        type: String,
        required: true,
      },
      vehicleInsurance: {
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

// // Add indexes for faster queries
// deliveryPartnerSchema.index({ email: 1 });
// deliveryPartnerSchema.index({ status: 1 });
// deliveryPartnerSchema.index({ areaOfOperation: 1 });

export default mongoose.models.DeliveryPartner ||
  mongoose.model("DeliveryPartner", deliveryPartnerSchema);
