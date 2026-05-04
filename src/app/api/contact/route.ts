import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate environment variables
const SMTP_HOST = process.env['SMTP_HOST'] as string | undefined;
const SMTP_PORT = parseInt(process.env['SMTP_PORT'] as string ?? '587', 10);
const SMTP_USER = process.env['SMTP_USER'] as string | undefined;
const SMTP_PASSWORD = process.env['SMTP_PASSWORD'] as string | undefined;
const SMTP_FROM = process.env['SMTP_FROM'] ?? 'noreply@akci-gebaeudereinigung.de';
const SMTP_TO = process.env['SMTP_TO'] ?? 'akci.gebaeudereinigung@gmail.com';

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuche es später erneut.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Alle erforderlichen Felder müssen ausgefüllt werden.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      );
    }

    // Only send email if SMTP is configured
    if (SMTP_HOST && SMTP_USER && SMTP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASSWORD,
        },
      });

      // Email to company
      await transporter.sendMail({
        from: SMTP_FROM,
        to: SMTP_TO,
        subject: `Neue Anfrage von ${name} - ${service}`,
        html: `
          <h2>Neue Anfrage erhalten</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Leistung:</strong> ${escapeHtml(service)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      });

      // Confirmation email to customer
      await transporter.sendMail({
        from: SMTP_FROM,
        to: email,
        subject: 'Wir haben deine Anfrage erhalten - AKCI Gebäudereinigung',
        html: `
          <h2>Vielen Dank für deine Anfrage!</h2>
          <p>Hallo ${escapeHtml(name)},</p>
          <p>wir haben deine Anfrage erhalten und werden dich schnellstmöglich kontaktieren.</p>
          <p>Deine Anfrage:</p>
          <ul>
            <li><strong>Leistung:</strong> ${escapeHtml(service)}</li>
            <li><strong>Nachricht:</strong> ${escapeHtml(message).replace(/\n/g, '<br>')}</li>
          </ul>
          <p>Beste Grüße,<br>Das Team von AKCI Gebäudereinigung</p>
          <hr>
          <p style="color: #999; font-size: 12px;">
            Rankestraße 6, 76137 Karlsruhe<br>
            Tel: 0176 647 529 95<br>
            E-Mail: akci.gebaeudereinigung@gmail.com
          </p>
        `,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEscapeMap[char]);
}
