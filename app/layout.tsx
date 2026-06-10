import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://knipm.edu.pl"),
  title: {
    default: "KNI — Koło Naukowe Informatyki",
    template: "%s | KNI Politechnika Morska Szczecin",
  },
  description:
    "Koło Naukowe Informatyki Politechniki Morskiej w Szczecinie. Budujemy projekty, organizujemy hackathony i rozwijamy pasje studentów informatyki.",
  keywords: [
    "KNI",
    "Koło Naukowe Informatyki",
    "Politechnika Morska Szczecin",
    "informatyka",
    "studenci",
    "projekty",
    "hackathon",
  ],
  authors: [{ name: "KNI Politechnika Morska w Szczecinie" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://knipm.edu.pl",
    siteName: "KNI Politechnika Morska Szczecin",
    title: "KNI — Koło Naukowe Informatyki",
    description:
      "Budujemy projekty, organizujemy hackathony i rozwijamy pasje studentów informatyki na Politechnice Morskiej w Szczecinie.",
    images: [
      {
        url: "/logo/kni_black_pl_1024.png",
        width: 1024,
        height: 1024,
        alt: "Logo KNI Politechnika Morska Szczecin",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "KNI — Koło Naukowe Informatyki",
    description:
      "Budujemy projekty, organizujemy hackathony i rozwijamy pasje studentów informatyki na Politechnice Morskiej w Szczecinie.",
    images: ["/logo/kni_black_pl_1024.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://knipm.edu.pl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
