import Audit from "../models/Audit.js";

export const createAudit = async (data) => {
  const audit = new Audit(data);
  return await audit.save();
};