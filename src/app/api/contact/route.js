import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, company, component, quantity, material, message } = data;

    // Basic validation
    if (!name || (!email && !phone) || !component) {
      return NextResponse.json(
        { error: "Name, contact information (email or phone), and component description are required." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "shreemahalaxmiengineering04@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;

    // Check if SMTP is configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn("SMTP credentials not configured in environment variables. Falling back to log/WhatsApp workflow.");
      return NextResponse.json({
        success: true,
        smtpConfigured: false,
        message: "Inquiry received. SMTP credentials are not yet configured in environment variables.",
      });
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || `"Shree Mahalaxmi Website" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: email || smtpUser,
      subject: `[New Website Inquiry] Quote Request from ${name}${company ? ` (${company})` : ""}`,
      text: `
NEW QUOTE REQUEST - SHREE MAHALAXMI ENGINEERING
==================================================

Client Name: ${name}
Company: ${company || "N/A"}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}

Component Required: ${component}
Quantity: ${quantity || "N/A"}
Material: ${material || "Not specified"}

Additional Specifications / Details:
${message || "None provided"}

--------------------------------------------------
This inquiry was submitted from the website quotation form.
`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
  <div style="background-color: #0a0f1e; color: #ffffff; padding: 24px; text-align: center;">
    <h2 style="margin: 0 0 6px 0; color: #60a5fa; font-size: 20px;">Shree Mahalaxmi Engineering</h2>
    <p style="margin: 0; font-size: 14px; color: #94a3b8;">New Machine Component Quotation Request</p>
  </div>
  <div style="padding: 24px; background-color: #ffffff;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%; color: #475569;">Client Name:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Company:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${company || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Phone:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="tel:${phone}" style="color: #2563eb;">${phone || "N/A"}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Email:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;"><a href="mailto:${email}" style="color: #2563eb;">${email || "N/A"}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Component:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${component}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Quantity:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${quantity || "N/A"}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #475569;">Material:</td>
        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${material || "Not specified"}</td>
      </tr>
    </table>
    
    <div style="background-color: #f8fafc; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 4px; margin-bottom: 20px;">
      <div style="font-weight: bold; color: #334155; margin-bottom: 6px;">Specifications & Notes:</div>
      <div style="color: #475569; white-space: pre-wrap; font-size: 14px;">${message || "No additional notes provided."}</div>
    </div>
    
    <div style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
      Shree Mahalaxmi Engineering • 78, 70/3 Chirag Estate, CTM, Amraiwadi, Ahmedabad - 380026
    </div>
  </div>
</div>
`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      smtpConfigured: true,
      message: "Your inquiry has been successfully sent to our engineering team.",
    });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try contacting us via phone or WhatsApp." },
      { status: 500 }
    );
  }
}
