"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = "abhijain.technical@gmail.com";
const FROM_EMAIL = process.env.RESEND_EMAIL_DOMAIN
  ? `noreply@${process.env.RESEND_EMAIL_DOMAIN}`
  : "noreply@resend.dev";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

interface ActionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<ActionResult> {
  // Honeypot protection: if filled, silently succeed without sending
  if (data.honeypot) {
    return { success: true, message: "Message queued for review." };
  }

  // Validate required fields
  const { name, email, subject, message } = data;
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { success: false, message: "All fields are required." };
  }

  // Validate email format
  if (!email.includes("@") || email.length > 254) {
    return { success: false, message: "Please enter a valid email address." };
  }

  // Validate message length
  if (message.length > 5000) {
    return {
      success: false,
      message: "Message is too long (max 5000 characters).",
    };
  }

  try {
    // Send email to site owner
    const { data: sendData, error } = await resend.emails.send(
      {
        from: FROM_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: email,
        subject: `New Contact: ${subject}`,
        html: `
<html>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; background: #fafafa; padding: 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <tr>
        <td style="padding: 30px; background: linear-gradient(135deg, #d4a574 0%, #8b6f47 100%);">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px; border-bottom: 1px solid #e5e5e5;">
          <p style="margin: 0 0 20px 0; font-weight: 600; color: #666;">From:</p>
          <p style="margin: 0 0 15px 0; font-size: 14px; color: #1a1a1a;"><strong>${escapeHtml(name)}</strong><br/><a href="mailto:${escapeHtml(email)}" style="color: #d4a574; text-decoration: none;">${escapeHtml(email)}</a></p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 30px; border-bottom: 1px solid #e5e5e5;">
          <p style="margin: 20px 0 10px 0; font-weight: 600; color: #666;">Subject:</p>
          <p style="margin: 0 0 20px 0; font-size: 14px; color: #1a1a1a;">${escapeHtml(subject)}</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 30px 30px 30px;">
          <p style="margin: 20px 0 10px 0; font-weight: 600; color: #666;">Message:</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 3px solid #d4a574; font-size: 14px; line-height: 1.6; color: #333; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(message)}</div>
        </td>
      </tr>
      <tr>
        <td style="padding: 20px 30px; background: #fafafa; color: #999; font-size: 12px; text-align: center;">
          <p style="margin: 0;">Submitted via HastRekhaAI Contact Form</p>
        </td>
      </tr>
    </table>
  </body>
</html>
        `,
      },
      { idempotencyKey: `contact/${email}/${Date.now()}` }
    );

    if (error) {
      console.error("[v0] Resend error:", error.message);
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      };
    }

    console.log("[v0] Contact email sent:", sendData?.id);
    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("[v0] Contact form error:", err);
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
