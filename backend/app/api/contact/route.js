import { createContact } from "../../../controllers/contactController.js";
import connectDB from "../../../lib/db.js";
import { sendLeadNotification } from "../../../lib/mailer.js";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();

    const contact = await createContact(body);
    await sendLeadNotification({ type: "contact", payload: contact.toObject() });

    return Response.json({
      success: true,
      message: "Contact submitted successfully",
      data: contact,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
