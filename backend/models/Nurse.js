import mongoose from "mongoose";

const nurseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" },

    experience: Number,
    isAvailable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Nurse", nurseSchema);
