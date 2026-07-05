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
  URL: string;
  label: string;
}

export interface HackathonVideo {
  src: string;
  caption: string;
  title?: string;
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
  gallery?: string[];
  video?: HackathonVideo;
  imagePosition?: string;
}

export const HACKATHONS: Hackathon[] = [
  {
    slug: "hacknation-2025",
    title: "HackNation 2025",
    description: "Pierwszy ogólnopolski hackathon wdrożeniowy dla administracji publicznej. Prawie 1500 uczestników, 24 godziny kodowania i realne zadania od ministerstw.",
    fullDescription: `HackNation 2025 to był inny rodzaj hackathonu – nie startupowy, a wdrożeniowy. Ministerstwo Cyfryzacji zebrało niemal 1500 uczestników i 370 zespołów w Bydgoskim Centrum Targowo-Wystawienniczym, stawiając przed nimi realne zadania zgłoszone przez ministerstwa, miasta i instytucje publiczne. Łączna pula nagród: 482 000 zł.

Dla nas przygoda zaczęła się już o 4:00 rano – wtedy spod Szczecina wyruszył bus, który ekspresowo przewiózł ekipę KNI do Bydgoszczy. Po dotarciu na miejsce każdy uczestnik otrzymał identyfikator i karteczkę z preferencją żywieniową (wege lub mięso) – drobiazg, który przy tej skali imprezy robił różnicę.

Zanim programiści zasiedli do kodu, odbyła się konferencja towarzysząca (12:00–17:45). Wśród prelegentów znalazł się m.in. Adam Haertle – ekspert ds. cyberbezpieczeństwa i twórca Zaufanej Trzeciej Strony. Po konferencji ruszył właściwy maraton: 24 godziny kodowania.

HackNation to jednak coś więcej niż siedzenie przed laptopem. Na hali rozłożyły się stoiska z grami, symulatorami, robotami i stoły rekruterów z firm szukających pracowników. Między sesjami można było pojeść i oderwać się od edytora.

Nie brakowało też minusów. Na niemal 1500 uczestników przypadały dosłownie 3–4 kabiny toaletowe – kolejka ciągnęła się po 15 minut, a o prywatności lepiej nie wspominać. Drugą bolączką był brak prezentacji zwycięskich projektów po ogłoszeniu wyników – ta informacja zwrotna jest właśnie tym, co pozwala poprawić się na kolejnym hackathonie.

Mimo tego – warto było. Niecodzienna skala, prawdziwe problemy do rozwiązania i masa ciekawych ludzi. Do zobaczenia na HackNation 2026.`,
    image: "/hackathons/hacknation2025/IMG_2232.webp",
    date: "2025-12-06",
    location: "Bydgoszcz, Centrum Targowo-Wystawiennicze",
    status: "zakończony",
    milestones: [
      {
        date: "2025-12-06 04:00",
        title: "Wyjazd ze Szczecina",
        description: "Bus o świcie – ekspresowy przejazd do Bydgoszczy.",
        completed: true,
      },
      {
        date: "2025-12-06 12:00",
        title: "Konferencja otwierająca",
        description: "Prelekcje ekspertów, m.in. Adam Haertle (Zaufana Trzecia Strona).",
        completed: true,
      },
      {
        date: "2025-12-06 18:00",
        title: "Start kodowania",
        description: "Oficjalne rozpoczęcie 24-godzinnego maratonu programowania.",
        completed: true,
      },
      {
        date: "2025-12-07 18:00",
        title: "Ceremonia finałowa",
        description: "Ogłoszenie zwycięzców i zakończenie HackNation 2025.",
        completed: true,
      },
    ],
    posts: [],
    gallery: [
      "/hackathons/hacknation2025/IMG_2217.webp",
      "/hackathons/hacknation2025/IMG_2220.webp",
      "/hackathons/hacknation2025/IMG_2224.webp",
      "/hackathons/hacknation2025/IMG_2227.webp",
      "/hackathons/hacknation2025/IMG_2232.webp",
      "/hackathons/hacknation2025/IMG_2243.webp",
      "/hackathons/hacknation2025/IMG_2248.webp",
      "/hackathons/hacknation2025/IMG_2253.webp",
      "/hackathons/hacknation2025/IMG_2256.webp",
      "/hackathons/hacknation2025/IMG_2270.webp",
      "/hackathons/hacknation2025/IMG_2272.webp",
    ],
    video: {
      src: "/hackathons/hacknation2025/IMG_2250.mp4",
      caption: "Nagranie z oficjalnego otwarcia HackNation 2025 – pierwsze chwile maratonu na żywo.",
    },
  },

  {
    slug: "hackyeah-2025",
    title: "HackYeah 2025",
    description: "Największy stacjonarny hackathon w Europie — Tauron Arena Kraków, 4–5 października 2025. Zwiedzanie, hotel, 24h kodowania i dwa kawałki pizzy na przeżycie.",
    fullDescription: `HackYeah 2025 zaczął się dzień wcześniej niż sam hackathon. Przyjechaliśmy do Krakowa z wyprzedzeniem — zwiedziliśmy miasto, mieliśmy hotel i mogliśmy spokojnie naładować baterie przed maratonem. Taka przedhackathonowa turystyka to zdecydowanie dobry pomysł.

Dzień później weszliśmy do Tauron Areny. Skala robiła wrażenie — tysiące uczestników, dziesiątki taskow, gigantyczna scena z pokazami świetlnymi. W programie konferencyjnym pojawił się m.in. Mateusz Chrobok — ekspert od cyberbezpieczeństwa i AI, który opowiadał o hakowaniu modeli językowych ("Hackowanie AI, czyli jak uzyskiwać odpowiedzi mimo sprzeciwu modelu").

Potem ruszył właściwy hackathon: 24 godziny kodowania bez litości.

Co do jedzenia — organizatorzy zapewnili dokładnie dwa kawałki pizzy na osobę. To tyle. Resztę trzeba było ogarnąć samemu. Na plus: toalety były normalne — kabiny z prawdziwymi drzwiami, prywatność gwarantowana, zero kolejek. Po tym co przeżyliśmy na HackNation to był luksus.

Minusem, podobnie jak wszędzie, był brak prezentacji zwycięskich prac po ogłoszeniu wyników. Nie wiadomo co konkretnie wygrało i dlaczego — feedback zerowy.

Po wszystkim — powrót do Szczecina pociągiem.

_Editor's note (Piotr Wittig): nie spałem wtedy 36 godzin._`,
    image: "/hackathons/hackyeah/IMG_0680.webp",
    date: "2025-10-04",
    location: "Kraków, Tauron Arena",
    status: "zakończony",
    milestones: [
      {
        date: "2025-10-03",
        title: "Przyjazd do Krakowa",
        description: "Dzień wcześniej — zwiedzanie miasta i nocleg w hotelu przed hackmathonem.",
        completed: true,
      },
      {
        date: "2025-10-04",
        title: "Start hackathonu",
        description: "Oficjalne otwarcie w Tauron Arenie, konferencja z Mateuszem Chrobokiem i 24h kodowania.",
        completed: true,
      },
      {
        date: "2025-10-05",
        title: "Zakończenie i powrót",
        description: "Ogłoszenie wyników, ceremonia zamknięcia, powrót pociągiem do Szczecina.",
        completed: true,
      },
    ],
    posts: [],
    gallery: [
      "/hackathons/hackyeah/IMG_0680.webp",
      "/hackathons/hackyeah/IMG_0681.webp",
      "/hackathons/hackyeah/IMG_0683.webp",
      "/hackathons/hackyeah/1759862203046.webp",
      "/hackathons/hackyeah/IMG_0696.webp",
      "/hackathons/hackyeah/IMG_0701.webp",
      "/hackathons/hackyeah/IMG_0709.webp",
      "/hackathons/hackyeah/1759862210395.webp",
      "/hackathons/hackyeah/1759862218246.webp",
      "/hackathons/hackyeah/1759862212517.webp",
      "/hackathons/hackyeah/1759862213721.webp",
      "/hackathons/hackyeah/1759862217008.webp",
      "/hackathons/hackyeah/IMG_0713.webp",
    ],
    video: {
      src: "/hackathons/hackyeah/zakonczenie.mp4",
      title: "Nagranie z zakończenia",
      caption: "Nagranie z ceremonii zakończenia HackYeah 2025 — ogłoszenie wyników na żywo w Tauron Arenie.",
    },
  },
  {
    slug: "cybermil-2026",
    title: "Cybermil 2026 & INSECON",
    description: "Elitarny hackathon wojskowy realizowany w dwóch etapach podczas konferencji INSECON.",
    fullDescription: "Cybermil 2026 to wyjątkowe wydarzenie łączące świat technologii wojskowych i cywilnego cyberbezpieczeństwa. Hackathon składał się z dwóch kluczowych etapów: intensywnych eliminacji online oraz wielkiego finału na żywo podczas Międzynarodowej Konferencji Cyberbezpieczeństwa INSECON. Zadania dotyczyły zdobywania różnego rodzaju Flag, które sprawdzały wszechstronne umiejętności w ramach CTF (Capture The Flag).",
    image: "/hackathons/cybermil/hack_cybermil.jpg",
    imagePosition: "center 25%",
    date: "2026-06-05",
    location: "Warszawa,INSECON(Poznań)",
    status: "zakończony",
    milestones: [
      {
        date: "2025-12-20",
        title: "Etap 0 ",
        description: "Kursy Online, mające na celu przygotowanie uczestników do eliminacji w ramach Akademii Cybermil.",
        completed: true,
      },
      {
        date: "2026-05-03",
        title: "Etap I",
        description: "CTF w Poznaniu, po którym nastąpiła publikacja listy zespołów zakwalifikowanych do finału w Warszawie.",
        completed: true,
      },
      {
        date: "2026-06-05",
        title: "Etap II: Wielki Finał",
        description: "24-godzinne starcie na żywo w trakcie konferencji INSECON.",
        completed: true,
      },
      {
        date: "2026-06-05",
        title: "Gala INSECON",
        description: "Uroczyste wręczenie nagród na głównej scenie konferencji.",
        completed: true,
      },
    ],
    posts: [
      {
        id: "cyber-1",
        date: "2026-06-05",
        title: "Niesamowite doświadczenie na INSECON",
        content: "Bycie częścią Cybermil 2026 to nie tylko kodowanie, ale też możliwość uczestnictwa w panelach konferencji INSECON. Wiedza zdobyta od ekspertów z całego świata jest bezcenna.",
        URL: "https://www.cyber.mil.pl/articles/aktualnosci-y/2026-05-07u-fina-projektu-akademia-cyber_mil/",
        label: "Kliknij by zobaczyc szczegoly"
      },
    ],
  },
  {
    slug: "hackathon-morski-2026",
    title: "Hackathon Morski 2026",
    description: "Ogólnopolski hackathon morski zorganizowany podczas IV Kongresu Polskie Porty 2030 w Sopocie.",
    fullDescription: "Hackathon Morski 2026 to 24-godzinny maraton projektowy zorganizowany w ramach IV Kongresu Polskie Porty 2030 w hotelu Radisson Blu w Sopocie. Wydarzenie zgromadziło 10 zespołów studenckich z całej Polski, które przez całą dobę pracowały nad realnym problemem biznesowym z branży TSL, zgłoszonym przez partnerów Kongresu. Zespół Koła Naukowego Informatyki Politechniki Morskiej w Szczecinie w składzie Aleksy Chojnowski, Mateusz Silski i Paweł Dutkiewicz zajął 3. miejsce, prezentując swoje rozwiązanie przed jury konkursowym i zdobywając nagrodę finansową.",
    image: "/hackathons/morski2026/1782317761901.jpg",
    imagePosition: "center 25%",
    date: "2026-06-23",
    location: "Sopot, Radisson Blu",
    status: "zakończony",
    milestones: [
      {
        date: "2026-06-22",
        title: "Przyjazd do Sopotu",
        description: "Dzień wcześniej uczestnicy przyjechali do Sopotu, aby przygotować się do hackathonu.",
        completed: true,
      },
      {
        date: "2026-06-23",
        title: "Start hackathonu",
        description: "Oficjalny start hackathonu w hotelu Radisson Blu w Sopocie.",
        completed: true,
      },
      {
        date: "2026-06-24",
        title: "Zakończenie i ogłoszenie wyników",
        description: "Uroczyste zakończenie hackathonu, prezentacja projektów i ogłoszenie zwycięzców.",
        completed: true,
      },
      {
        date: "2026-06-24",
        title: "Gala wręczenia nagród",
        description: "Uroczyste wręczenie nagród dla zwycięzców hackathonu.",
        completed: true,
      },
      {
        date: "2026-06-24",
        title: "Powrót uczestników do domów",
        description: "Po zakończeniu hackathonu uczestnicy wrócili do swoich domów.",
        completed: true,
      },
    ],
    posts: [],
    gallery: [
      "/hackathons/morski2026/1782317761901.jpg",
      "/hackathons/morski2026/3_1.jpg",
      "/hackathons/morski2026/3_2.jpg",
      "/hackathons/morski2026/3_3.jpg",
      "/hackathons/morski2026/3_4.jpg",
      "/hackathons/morski2026/hack.jpg",
      "/hackathons/morski2026/karol.jpg",
    ],
  },
];
