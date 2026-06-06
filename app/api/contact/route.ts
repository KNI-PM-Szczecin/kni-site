import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { 
      firstName, 
      lastName, 
      yearOfStudy, 
      major, 
      email, 
      albumNumber, 
      recaptchaToken 
    } = await req.json();

    // Helper to sanitize input against CSV/Excel injection
    const sanitizeSpreadsheetInput = (value: string | number | undefined) => {
      if (value === undefined || value === null) return "";
      const stringValue = String(value).trim();
      // Prepend ' if the value starts with characters that could trigger formula execution
      if (/^[=+\-@\t\r]/.test(stringValue)) {
        return `'${stringValue}`;
      }
      return stringValue;
    };

    const sanitizedData = {
      firstName: sanitizeSpreadsheetInput(firstName),
      lastName: sanitizeSpreadsheetInput(lastName),
      yearOfStudy: sanitizeSpreadsheetInput(yearOfStudy),
      major: sanitizeSpreadsheetInput(major),
      email: sanitizeSpreadsheetInput(email),
      albumNumber: sanitizeSpreadsheetInput(albumNumber),
    };

    // 1. Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    if (!recaptchaSecret) {
      console.error("RECAPTCHA_SECRET_KEY is not set");
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ error: "Nieprawidłowa weryfikacja reCAPTCHA." }, { status: 400 });
    }

    // 2. Log to Google Sheets (via Google Apps Script Web App)
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify({
          ...sanitizedData,
          timestamp: new Date().toISOString(),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    // 3. Send Confirmation Email via SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM_EMAIL;

    if (smtpHost && smtpPort && smtpUser && smtpPass && smtpFrom) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(smtpPort),
        secure: parseInt(smtpPort) === 465, 
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"KNI Koło Naukowe Informatyków" <${smtpFrom}>`,
        to: sanitizedData.email,
        subject: "Dziękujemy za zainteresowanie KNI!",
        text: `Cześć ${sanitizedData.firstName}!\n\nDziękujemy za zgłoszenie do Koła Naukowego Informatyków (KNI). Potwierdzamy otrzymanie Twoich danych.\n\nKtoś z naszego koła odezwie się do Ciebie w najbliższym czasie, aby poinformować o kolejnych krokach i terminach spotkań.\n\nDo zobaczenia!\nZespół KNI`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
            <h2>Cześć ${sanitizedData.firstName}!</h2>
            <p>Dziękujemy za zgłoszenie do <strong>Koła Naukowego Informatyków (KNI)</strong>. Potwierdzamy otrzymanie Twoich danych.</p>
            <p>Ktoś z naszego koła odezwie się do Ciebie w najbliższym czasie, aby poinformować o kolejnych krokach i terminach spotkań.</p>
            <p>Do zobaczenia!<br><strong>Zespół KNI</strong></p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="font-size: 12px; color: #999;">Wiadomość została wysłana automatycznie przez system rekrutacyjny KNI.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.error("Missing SMTP configuration:", {
        host: !!smtpHost,
        port: !!smtpPort,
        user: !!smtpUser,
        pass: !!smtpPass,
        from: !!smtpFrom
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Wystąpił błąd podczas przesyłania formularza." }, { status: 500 });
  }
}

