import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { buildEnquiryEmailHtml, type EnquiryData } from "@/lib/enquiry-email";
import { SITE } from "@/data/site";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<EnquiryData>;

  if (!body.name || !body.email || !body.projectType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const data: EnquiryData = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    projectType: body.projectType,
    budget: body.budget || "Not specified",
    timeline: body.timeline || "Not specified",
    message: body.message,
  };

  try {
    await resend.emails.send({
      from: `Jupiter Technology <enquiries@jupitertechnology.tech>`,
      to: SITE.email,
      replyTo: data.email,
      subject: `New project inquiry — ${data.name}`,
      html: buildEnquiryEmailHtml(data),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send enquiry email", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
