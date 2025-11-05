import { Resend } from "resend";

export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const data = JSON.parse(event.body);

    const resend = new Resend(process.env.RESEND_API);

    const html = data.isConsult
      ? `
        <h3>New consultancy</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      `
      : `
        <h3>New Order</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Combo:</strong> ${data.combo}</p>
        <p><strong>Referral:</strong> ${data.referral}</p>
        <p><strong>Project:</strong> ${data.project}</p>
      `;

    const response = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "lovishthakural66@gmail.com",
      subject: "New Contact Form Submission",
      html,
    });

    console.log(response)

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch (err: any) {
    console.error("Email failed:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown error" }),
    };
  }
};
