import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, message } = await req.json();

    // Trim input values
    const fName = firstName?.trim();
    const lName = lastName?.trim();
    const msg = message?.trim();
    const ph = phone?.trim() || "N/A";

    if (!fName || !lName || !msg) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "darelbavcar1@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${fName} ${lName}</p>
        <p><strong>Phone:</strong> ${ph}</p>
        <p><strong>Message:</strong><br/>${msg}</p>
      `,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
