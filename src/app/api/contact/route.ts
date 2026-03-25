import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate the request body
    const validatedData = contactSchema.safeParse(body);
    
    if (!validatedData.success) {
      return NextResponse.json(
        { message: "Invalid input data", errors: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = validatedData.data;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "K.B. ASSOCIATES Leads <onboarding@resend.dev>", // Replace with verified domain in production
      to: [process.env.CONTACT_EMAIL || "kbassociates8587@gmail.com"],
      subject: `New Loan Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #001e40;">New Loan Inquiry</h2>
          <p>You have received a new lead from your website contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 10px 0;">${phone}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <p style="font-weight: bold; margin-top: 0;">Message:</p>
            <p style="margin-bottom: 0;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #999;">This email was sent from the K.B. ASSOCIATES contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { message: "Failed to send email", error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Server Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
