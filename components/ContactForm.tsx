"use client";

import { useState, useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FadeUp } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    yearOfStudy: "",
    major: "",
    email: "",
    albumNumber: "",
    agreement: false,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setStatus("error");
      setErrorMessage("Proszę potwierdzić, że nie jesteś robotem.");
      return;
    }

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // 1. Save to Google Sheets (via existing Google Script)
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ ...formData, recaptchaToken: token }),
        });
      }

      // 2. Send Confirmation Email via EmailJS (using SMTP Cloudmail)
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            major: formData.major,
            yearOfStudy: formData.yearOfStudy,
            albumNumber: formData.albumNumber,
          },
          publicKey
        );
      }

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        yearOfStudy: "",
        major: "",
        email: "",
        albumNumber: "",
        agreement: false,
      });
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Wystąpił błąd podczas wysyłania zgłoszenia. Spróbuj ponownie później.");
    }
  };

  if (status === "success") {
    return (
      <FadeUp className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dziękujemy za zgłoszenie!</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Twoje dane zostały pomyślnie zarejestrowane. Skontaktujemy się z Tobą wkrótce pod podanym adresem e-mail.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline">
          Wróć do formularza
        </Button>
      </FadeUp>
    );
  }

  return (
    <FadeUp className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="firstName">
              Imię
            </label>
            <input
              required
              id="firstName"
              name="firstName"
              maxLength={35}
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
              placeholder="Jan"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="lastName">
              Nazwisko
            </label>
            <input
              required
              id="lastName"
              name="lastName"
              maxLength={35}
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
              placeholder="Kowalski"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="yearOfStudy">
              Rok studiów
            </label>
            <select
              required
              id="yearOfStudy"
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
            >
              <option value="">Wybierz rok</option>
              <option value="1">1 rok</option>
              <option value="2">2 rok</option>
              <option value="3">3 rok</option>
              <option value="4">4 rok</option>
              <option value="5">5 rok</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="major">
              Kierunek
            </label>
            <input
              required
              id="major"
              name="major"
              maxLength={80}
              value={formData.major}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
              placeholder="Informatyka"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              E-mail
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              maxLength={35}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
              placeholder="jan.kowalski@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="albumNumber">
              Numer albumu
            </label>
            <input
              required
              id="albumNumber"
              name="albumNumber"
              maxLength={6}
              value={formData.albumNumber}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-900 dark:focus:ring-white outline-none transition-all"
              placeholder="12345"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 py-2">
          <input
            required
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 cursor-pointer"
          />
          <label htmlFor="agreement" className="text-sm text-gray-500 dark:text-gray-400 leading-snug cursor-pointer">
            Zaznaczając to pole, potwierdzam chęć aktywnego udziału w działalności KNI Koło Naukowe Informatyków. Przyjmuję do wiadomości{" "}
            <a href="/regulamin" target="_blank" className="text-gray-900 dark:text-white underline underline-offset-4 font-medium">
              krótki regulamin
            </a>
            , który określa, że brak aktywności może skutkować skreśleniem z listy członków koła.
          </label>
        </div>

        <div className="flex justify-center pt-4">
          {mounted && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              theme={resolvedTheme === "dark" ? "dark" : "light"}
            />
          )}
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
            <AlertCircle className="w-4 h-4" />
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full h-12 text-base font-semibold rounded-full"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Wysyłanie...
            </>
          ) : (
            "Dołącz do KNI"
          )}
        </Button>
      </form>
    </FadeUp>
  );
}
