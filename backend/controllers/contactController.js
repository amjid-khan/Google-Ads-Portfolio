import Contact from "../models/Contact.js";

export const createContact = async (data) => {
  const contact = new Contact(data);
  return await contact.save();
};
