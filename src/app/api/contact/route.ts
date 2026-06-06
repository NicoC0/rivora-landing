import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_TYPES = ["custom", "deployment", "product", "other"];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, type, message } = body;

    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      typeof email !== "string" ||
      !EMAIL_REGEX.test(email) ||
      typeof type !== "string" ||
      !VALID_TYPES.includes(type) ||
      typeof message !== "string" ||
      message.trim().length < 10
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      type,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "Rivora <onboarding@resend.dev>",
          to: process.env.CONTACT_EMAIL,
          reply_to: payload.email,
          subject: `[Rivora] New ${payload.type} inquiry from ${payload.name}`,
          text: [
            `Name: ${payload.name}`,
            `Email: ${payload.email}`,
            `Type: ${payload.type}`,
            "",
            payload.message,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
      }
    } else {
      console.log("[Rivora Contact]", JSON.stringify(payload, null, 2));
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", service: siteConfig.name });
}
