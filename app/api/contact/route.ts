import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

// Cloudflare Turnstile verification
async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true; // Allow in development
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

// Send to Zapier webhook
async function sendToZapier(formData: Record<string, string>) {
  if (!process.env.ZAPIER_WEBHOOK_URL) {
    console.warn("ZAPIER_WEBHOOK_URL not set, skipping Zapier");
    return;
  }

  try {
    await fetch(process.env.ZAPIER_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.error("Zapier webhook error:", error);
    // Don't fail the request if Zapier fails
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const projectType = formData.get("projectType") as string;
    const timeline = formData.get("timeline") as string;
    const details = formData.get("details") as string;
    const turnstileToken = formData.get("cf-turnstile-response") as string;

    // Validate required fields
    if (!name || !email || !phone || !projectType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify Turnstile token
    if (turnstileToken) {
      const isValid = await verifyTurnstileToken(turnstileToken);
      if (!isValid) {
        return NextResponse.json(
          { error: "Invalid security token" },
          { status: 400 }
        );
      }
    }

    // Prepare email content
    const emailContent = {
      to: process.env.CONTACT_EMAIL || "exchange@1031exchangeofjacksonville.com",
      from: process.env.SENDGRID_FROM_EMAIL || "noreply@1031exchangeofjacksonville.com",
      subject: `New Contact Form Submission: ${projectType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Project Type:</strong> ${projectType}</p>
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        ${details ? `<p><strong>Details:</strong></p><p>${details.replace(/\n/g, "<br>")}</p>` : ""}
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        ${company ? `Company: ${company}` : ""}
        Project Type: ${projectType}
        ${timeline ? `Timeline: ${timeline}` : ""}
        ${details ? `Details: ${details}` : ""}
      `,
    };

    // Send email via SendGrid
    if (process.env.SENDGRID_API_KEY) {
      try {
        await sgMail.send(emailContent);
      } catch (error) {
        console.error("SendGrid error:", error);
        // Continue even if SendGrid fails
      }
    }

    // Send to Zapier webhook
    await sendToZapier({
      name,
      email,
      phone,
      company: company || "",
      projectType,
      timeline,
      details,
      source: "contact-form",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

