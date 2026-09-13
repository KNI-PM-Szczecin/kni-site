import type { Metadata } from "next";
import Image from "next/image";
import QRCode from "qrcode";
import ShowcaseSlideshow from "@/components/ShowcaseSlideshow";
import logo from "@/public/logo/kni_white_pl_1024.png";

export const metadata: Metadata = {
  title: "KNI — Pokaz",
  robots: { index: false, follow: false },
};

const SITE_URL = "https://knipm.edu.pl";

// Curated mix of hackathon + Oblicza IT photos for the event intro loop.
const SLIDES = [
  { src: "/oblicza_it/1764787629964.webp" },
  { src: "/hackathons/hackyeah/1759862212517.webp" },
  { src: "/hackathons/hacknation2025/IMG_2224.webp" },
  { src: "/oblicza_it/1766778715302.webp" },
  { src: "/hackathons/cybermil/1763587942958.webp" },
  { src: "/hackathons/hackyeah/IMG_0696.webp" },
  { src: "/oblicza_it/1766778715755.webp" },
  { src: "/hackathons/hacknation2025/IMG_2248.webp" },
  { src: "/hackathons/goofy_hackathon/full_send.jpg" },
  { src: "/oblicza_it/1766778716024.webp" },
  { src: "/hackathons/hackyeah/1759862217008.webp" },
  { src: "/hackathons/morski2026/hack.jpg" },
  { src: "/hackathons/hacknation2025/IMG_2270.webp" },
  { src: "/hackathons/goofy_hackathon/hard_work.jpg" },
  { src: "/hackathons/piter.webp", objectPosition: "top" },
];

export default async function ShowcasePage() {
  const qrSvg = await QRCode.toString(SITE_URL, {
    type: "svg",
    margin: 0,
    color: { dark: "#111827", light: "#ffffff" },
  });

  return (
    <main className="relative h-dvh w-dvw overflow-hidden bg-black text-white">
      <ShowcaseSlideshow slides={SLIDES} />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 sm:p-12 lg:p-16">
        <Image src={logo} alt="KNI" className="h-12 w-auto self-start sm:h-16" priority />

        <div className="flex flex-col-reverse items-end justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 sm:text-sm">
              Koło Naukowe Informatyki · Politechnika Morska w Szczecinie
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Budujemy przyszłość razem{" "}
              <span className="text-blue-400">z&nbsp;technologią.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Projekty, hackathony i wydarzenia branżowe — dołącz do nas na Discordzie
              i zobacz, co robimy.
            </p>
          </div>

          {/* QR code -> main site */}
          <div className="flex shrink-0 flex-col items-center gap-2 rounded-2xl bg-white/95 p-3 shadow-2xl backdrop-blur sm:p-4">
            <div
              className="h-28 w-28 sm:h-36 sm:w-36"
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
            <p className="text-center text-[11px] font-semibold uppercase tracking-wide text-gray-700 sm:text-xs">
              Zeskanuj i dołącz
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
