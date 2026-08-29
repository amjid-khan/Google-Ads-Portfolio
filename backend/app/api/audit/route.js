import { createAudit } from "../../../controllers/auditController.js";
import connectDB from "../../../lib/db.js";
import { sendLeadNotification } from "../../../lib/mailer.js";

export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();

    const audit = await createAudit(body);
    await sendLeadNotification({ type: "audit", payload: audit.toObject() });

    return Response.json({
      success: true,
      message: "Audit submitted successfully",
      data: audit,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}