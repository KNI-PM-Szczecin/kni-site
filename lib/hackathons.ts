export interface Milestone {
  date: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface HackathonPost {
  id: string;
  date: string;
  title: string;
  content: string;
  image?: string;
}

export interface Hackathon {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  location: string;
  status: "nadchodzący" | "w toku" | "zakończony";
  milestones: Milestone[];
  posts: HackathonPost[];
}

export const HACKATHONS: Hackathon[] = [
  {
    slug: "hackyeah-2025",
    title: "HackYeah 2025",
    description: "Największy stacjonarny hackathon w Europie, skupiony na rozwiązaniach prospołecznych.",
    fullDescription: "HackYeah to tysiące osób, dziesiątki zadań i 24 godziny intensywnego kodowania. W edycji 2025 nasz zespół skupił się na wyzwaniach z obszaru ekologii i optymalizacji zużycia energii w miastach. To niesamowita okazja do networkingu i sprawdzenia się w ekstremalnych warunkach.",
    image: "/hackathons/1759862212517.webp",
    date: "2025-09-28",
    location: "Kraków, Tauron Arena",
    status: "zakończony",
    milestones: [
      {
        date: "2025-07-01",
        title: "Otwarcie biletów",
        description: "Start sprzedaży biletów Early Bird.",
        completed: true,
      },
      {
        date: "2025-09-28",
        title: "Start kodowania",
        description: "Oficjalne rozpoczęcie 24-godzinnego maratonu.",
        completed: true,
      },
      {
        date: "2025-09-29",
        title: "Pitching",
        description: "Prezentacja projektów przed mentorami i jury.",
        completed: true,
      },
    ],
    posts: [
      {
        id: "1",
        date: "2025-09-29",
        title: "Finał HackYeah!",
        content: "Zakończyliśmy zmagania w Krakowie. Nasz projekt 'EcoTrack' zebrał świetne opinie od mentorów. Wracamy z masą nowych pomysłów i kontaktów.",
        image: "/hackathons/1763587942958.webp",
      },
    ],
  },
  {
    slug: "cybermil-2026",
    title: "Cybermil 2026 & INSECON",
    description: "Elitarny hackathon wojskowy realizowany w dwóch etapach podczas konferencji INSECON.",
    fullDescription: "Cybermil 2026 to wyjątkowe wydarzenie łączące świat technologii wojskowych i cywilnego cyberbezpieczeństwa. Hackathon składał się z dwóch kluczowych etapów: intensywnych eliminacji online oraz wielkiego finału na żywo podczas Międzynarodowej Konferencji Cyberbezpieczeństwa INSECON. Zadania dotyczyły obrony infrastruktury krytycznej przed zaawansowanymi atakami typu APT.",
    image: "/hackathons/piter.webp",
    date: "2026-04-15",
    location: "Poznań, MTP (INSECON)",
    status: "zakończony",
    milestones: [
      {
        date: "2026-03-01",
        title: "Etap I: Eliminacje Online",
        description: "Zdalne testy wiedzy i zadania typu CTF wyłaniające najlepsze zespoły.",
        completed: true,
      },
      {
        date: "2026-03-20",
        title: "Ogłoszenie Finalistów",
        description: "Publikacja listy zespołów zakwalifikowanych do finału w Poznaniu.",
        completed: true,
      },
      {
        date: "2026-04-15",
        title: "Etap II: Wielki Finał",
        description: "24-godzinne starcie na żywo w trakcie konferencji INSECON.",
        completed: true,
      },
      {
        date: "2026-04-16",
        title: "Gala INSECON",
        description: "Uroczyste wręczenie nagród na głównej scenie konferencji.",
        completed: true,
      },
    ],
    posts: [
      {
        id: "cyber-1",
        date: "2026-04-16",
        title: "Niesamowite doświadczenie na INSECON",
        content: "Bycie częścią Cybermil 2026 to nie tylko kodowanie, ale też możliwość uczestnictwa w panelach konferencji INSECON. Wiedza zdobyta od ekspertów z całego świata jest bezcenna.",
        image: "/hackathons/1765574231626.webp",
      },
    ],
  },
];
