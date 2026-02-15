export const runtime = "nodejs";

import nodemailer from "nodemailer";

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function isValidEmail(email: string): boolean {
  // Simple sanity check (not RFC-perfect, but fine for contact forms)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
      website?: string; // honeypot
    };

    // Honeypot for bots
    if (website && website.trim().length > 0) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const safeName = (name ?? "").trim();
    const safeEmail = (email ?? "").trim();
    const safeMessage = (message ?? "").trim();

    if (safeName.length < 2 || safeName.length > 80) {
      return Response.json({ ok: false, error: "Please enter a valid name." }, { status: 400 });
    }

    if (!isValidEmail(safeEmail) || safeEmail.length > 120) {
      return Response.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
    }

    if (safeMessage.length < 10 || safeMessage.length > 4000) {
      return Response.json({ ok: false, error: "Please enter a valid message." }, { status: 400 });
    }

    const host = requiredEnv("SMTP_HOST");
    const port = Number(requiredEnv("SMTP_PORT"));
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const from = process.env.SMTP_FROM || user;
    const to = requiredEnv("CONTACT_TO");

    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const subject = `Portfolio Contact: ${safeName}`;

    await transporter.sendMail({
      from,
      to,
      subject,
      replyTo: safeEmail,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
          <h2 style="margin:0 0 12px;">New portfolio message</h2>
          <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p style="margin:0 0 8px;"><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <p style="margin:16px 0 8px;"><strong>Message:</strong></p>
          <pre style="white-space: pre-wrap; background: #0b0b0b; color: #fff; padding: 12px; border-radius: 10px;">${escapeHtml(safeMessage)}</pre>
        </div>
      `,
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return Response.json(
      { ok: false, error: "Failed to send message.", detail: message },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
