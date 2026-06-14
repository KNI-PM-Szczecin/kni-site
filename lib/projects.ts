export interface TechItem {
  name: string;
  role: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon: "github" | "video" | "external";
}

export interface ProjectData {
  slug: string;
  title: string;
  acronym?: string;
  description: string;
  fullDescription: string;
  category: string;
  status: "Produkcja" | "W toku" | "Zakończony";
  heroImage?: string;
  cardImage?: string;
  members?: number;
  techStack?: TechItem[];
  highlights?: string[];
  gallery?: string[];
  links?: ProjectLink[];
  challenge?: string;
  future?: string;
}

export const PROJECTS_DETAIL: ProjectData[] = [
  {
    slug: "aleksy",
    title: "ALEKSY",
    acronym: "Autonomous Local Encrypted Knowledge System Yield",
    description:
      "W pełni offline'owy polski asystent głosowy — wake word, STT, LLM i TTS działają lokalnie na Jetson Xavier NX w customowej obudowie drukowanej 3D.",
    fullDescription: `ALEKSY to projekt asystenta głosowego zbudowanego od zera z myślą o jednej zasadzie: żadne dane nie opuszczają urządzenia. Żadnej chmury, żadnych kluczy API, żadnych logów na zdalnych serwerach.

Całość uruchomiona jest na NVIDIA Jetson Xavier NX — platformie przeznaczonej do edge AI. Urządzenie mieszka w pomarańczowej obudowie wydrukowanej w 3D, którą zaprojektowałem od podstaw. Na froncie wybite są litery "A.L.E.K.S.Y. — UNIT 01", po bokach okrągłe głośniki, u góry mikrofony lavalier, a na dole kratki wentylacyjne. Zasilanie z powerbanku USB-C — w pełni bezprzewodowe.

Pipeline działa sekwencyjnie: openWakeWord nasłuchuje słowa aktywującego, po wykryciu faster-Whisper transkrybuje wypowiedź, Bielik (polski LLM) uruchomiony przez Ollama generuje odpowiedź, a Piper TTS syntetyzuje głos i odtwarza go przez głośniki.

Największym wyzwaniem była latencja. Whisper na CPU potrzebuje 5–8 sekund na transkrypcję 2-sekundowego zdania — Jetson Xavier NX to starzejący się hardware, działający na granicy możliwości. Wersja v1 jest skończona i działa. Planowany jest v2 na Raspberry Pi 5 z podłączonym STT i LLM w chmurze, żeby osiągnąć czas odpowiedzi bliski natychmiastowemu.`,
    category: "Hardware / AI",
    status: "Zakończony",
    heroImage: "/projects/aleksy/front.webp",
    cardImage: "/projects/aleksy/front.webp",
    techStack: [
      { name: "Python", role: "Główny język projektu" },
      { name: "openWakeWord", role: "Detekcja słowa aktywującego" },
      { name: "faster-Whisper", role: "Speech-to-Text (STT)" },
      { name: "Bielik", role: "Polski LLM (AI brain)" },
      { name: "Ollama", role: "Lokalne serwowanie modelu LLM" },
      { name: "Piper TTS", role: "Text-to-Speech (głos)" },
      { name: "NVIDIA Jetson Xavier NX", role: "Platforma edge AI" },
    ],
    highlights: [
      "Całkowicie offline — zero chmury, zero API",
      "Polski język od podstaw (Bielik + Piper PL)",
      "Customowa obudowa 3D z wbudowanymi głośnikami i mikrofonami",
      "Zasilanie z powerbanku — w pełni bezprzewodowe",
    ],
    gallery: [
      "/projects/aleksy/front.webp",
      "/projects/aleksy/back.webp",
      "/projects/aleksy/angle1.webp",
      "/projects/aleksy/angle2.webp",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/MiniowaPM/voice-assistant",
        icon: "github",
      },
      {
        label: "Demo (YouTube Shorts)",
        href: "https://youtube.com/shorts/V51wDqSVl7A",
        icon: "video",
      },
    ],
    challenge:
      "Whisper na CPU transkrybuje 2-sekundową wypowiedź w 5–8 sekund. Jetson Xavier NX to starzejące się hardware'owe rozwiązanie — działamy na granicy jego możliwości. Mimo to v1 działa.",
    future:
      "Wersja v2 planowana na Raspberry Pi 5 z cloud-connected STT i LLM — czas odpowiedzi ma spaść do ułamku sekundy.",
  },
];
