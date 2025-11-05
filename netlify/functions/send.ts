import { Resend } from "resend";

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    const resend = new Resend("re_RySjDycJ_CzAxWZzb9JuEVpnJqtY2t2e1");

    const html = data.isConsult
      ? `
  <div style="font-family: Arial, sans-serif; padding: 20px; background:#f7f7f7;">
    <div style="max-width: 500px; margin: auto; background:#ffffff; padding: 20px; border-radius: 8px; border:1px solid #ddd;">
      <h2 style="margin-bottom: 10px; color:#333;">New Consultancy Request</h2>
      <hr style="border:none; height:1px; background:#eee; margin:15px 0;" />

      <p style="margin:8px 0;"><strong>Name:</strong> ${data.name}</p>
      <p style="margin:8px 0;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin:8px 0;"><strong>Phone:</strong> ${data.phone}</p>
    </div>
  </div>
  `
      : `
  <div style="font-family: Arial, sans-serif; padding: 20px; background:#f7f7f7;">
    <div style="max-width: 500px; margin: auto; background:#ffffff; padding: 20px; border-radius: 8px; border:1px solid #ddd;">
      <h2 style="margin-bottom: 10px; color:#333;">New Order</h2>
      <hr style="border:none; height:1px; background:#eee; margin:15px 0;" />

      <p style="margin:8px 0;"><strong>Name:</strong> ${data.name}</p>
      <p style="margin:8px 0;"><strong>Email:</strong> ${data.email}</p>
      <p style="margin:8px 0;"><strong>Phone:</strong> ${data.phone}</p>
      <p style="margin:8px 0;"><strong>Interest:</strong> ${data.interest}</p>
      <p style="margin:8px 0;"><strong>Budget:</strong> ${data.budget}</p>
      <p style="margin:8px 0;"><strong>Combo:</strong> ${data.combo}</p>
      <p style="margin:8px 0;"><strong>Referral:</strong> ${data.referral}</p>
      <p style="margin:8px 0;"><strong>Project:</strong> ${data.project}</p>
    </div>
  </div>
  `;

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "lovishthakural66@gmail.com",
      subject: "New Contact Form Submission",
      html,
    });

    console.log(response);

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err: any) {
    console.error("Email failed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown error" }),
    };
  }
};
