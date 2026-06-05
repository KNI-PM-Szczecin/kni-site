import { NextResponse } from "next/server";

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
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set");
      return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }

    const sheetResponse = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        yearOfStudy,
        major,
        email,
        albumNumber,
        timestamp: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!sheetResponse.ok) {
      throw new Error("Failed to log to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json({ error: "Wystąpił błąd podczas przesyłania formularza." }, { status: 500 });
  }
}
