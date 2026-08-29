import nodemailer from "nodemailer";

const MAIL_TO = process.env.MAIL_TO || "amjidkumywal170@gmail.com";

function createTransporter() {
  const user = process.env.MAIL_USER || process.env.EMAIL_USER;
  const pass = process.env.MAIL_PASS || process.env.EMAIL_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export async function sendLeadNotification({ type, payload }) {
  const transporter = createTransporter();
  if (!transporter) {
    // eslint-disable-next-line no-console
    console.warn(
      "MAIL_USER/MAIL_PASS not configured. Skipping lead notification email."
    );
    return { skipped: true };
  }

  const entries = Object.entries(payload || {})
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([key, value]) => `<li><strong>${key}:</strong> ${String(value)}</li>`)
    .join("");

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.MAIL_USER || process.env.EMAIL_USER,
      to: MAIL_TO,
      subject: `New ${type} submission`,
      html: `
        <h2>New ${type} submission</h2>
        <ul>${entries}</ul>
      `,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to send lead notification email:", error.message);
    return { skipped: true, reason: error.message };
  }

  return { skipped: false };
}

