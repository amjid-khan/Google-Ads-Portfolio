import mongoose from "mongoose";

const AuditSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    budget: { type: String, required: true },
    source: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Audit ||
  mongoose.model("Audit", AuditSchema);