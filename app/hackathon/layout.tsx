import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hackathony",
    template: "%s | KNI Politechnika Morska Szczecin",
  },
  description:
    "Hackathony i wyjazdy Koła Naukowego Informatyki Politechniki Morskiej w Szczecinie — relacje, zdjęcia i nadchodzące wydarzenia.",
  alternates: {
    canonical: "/hackathon/",
  },
};

export default function HackathonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
