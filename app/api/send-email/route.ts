import Mailjet from "node-mailjet";
import { NextResponse } from "next/server";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("SERVER body:", body);

    if (!process.env.MAILJET_FROM_EMAIL) {
      throw new Error("MAILJET_FROM_EMAIL missing");
    }

    const result = await mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: process.env.MAILJET_FROM_EMAIL,
              Name: "Website",
            },
            To: [{ Email: "darelbavcar1@gmail.com" }],
            Subject: "Test email",
            TextPart: body.message || "No message",
          },
        ],
      });

    console.log("Mailjet OK:", result.body);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
