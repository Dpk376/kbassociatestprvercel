import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "K.B. Associates <onboarding@resend.dev>",
      to: "kbassociates8587@gmail.com",
      subject: `New Loan Enquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #0f172a; margin-top: 0;">New Loan Enquiry Received</h2>
          <p style="color: #475569; font-size: 16px;">Details of the enquiry:</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #0f172a;">${phone}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-weight: bold; margin-bottom: 8px;">Message:</p>
            <p style="color: #0f172a; line-height: 1.6; margin-top: 0;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            This enquiry was sent from the K.B. Associates Contact Form.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
