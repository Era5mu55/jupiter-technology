const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.jupitertechnology.tech";

export type EnquiryData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  message?: string;
};

function row(label: string, value: string) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E4E7F0;">
        <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#2E6FF2;">${label}</p>
        <p style="margin:4px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#0A1330;">${value}</p>
      </td>
    </tr>`;
}

export function buildEnquiryEmailHtml(data: EnquiryData) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#F7F8FB;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F8FB;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #E4E7F0;">
            <tr>
              <td style="background:linear-gradient(135deg,#0A1330,#152150);padding:32px 32px 28px;">
                <img src="${SITE_URL}/android-chrome-192x192.png" width="40" height="40" alt="Jupiter Technology" style="display:block;border-radius:8px;margin-bottom:14px;" />
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#4FA3F7;">Jupiter Technology</p>
                <h1 style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:22px;color:#ffffff;">New project inquiry</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", data.name)}
                  ${row("Email", data.email)}
                  ${row("Phone", data.phone || "")}
                  ${row("Project type", data.projectType)}
                  ${row("Budget range", data.budget)}
                  ${row("Timeline", data.timeline)}
                </table>
                ${
                  data.message
                    ? `<p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#2E6FF2;">Project details</p>
                       <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#3C4257;white-space:pre-wrap;">${data.message}</p>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <a href="mailto:${data.email}" style="display:inline-block;background:#2E6FF2;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;padding:12px 24px;border-radius:999px;">Reply to ${data.name.split(" ")[0] || "lead"}</a>
              </td>
            </tr>
          </table>
          <p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#6b7186;">Sent from the enquiry form at www.jupitertechnology.tech</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
