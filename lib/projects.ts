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
      "Wersja v2 przeniosła się na Raspberry Pi 5 ze zdalnym serwerem do STT, LLM i TTS — zobacz projekt ALEKSY v2.",
  },
  {
    slug: "aleksy-v2",
    title: "ALEKSY v2",
    acronym: "Autonomous Local Encrypted Knowledge System Yield",
    description:
      "Polski asystent głosowy na Raspberry Pi 5 z buźką na OLED-zie — mówi sklonowanym głosem prawdziwego Aleksego, a ciężkie modele działają na zdalnym Macu mini.",
    fullDescription: `ALEKSY v2 to asystent głosowy zbudowany na stanowisko KNI podczas dni adaptacyjnych na Politechnice Morskiej w Szczecinie. Mówisz „Aleksy", zadajesz pytanie, a on odpowiada na głos sklonowanym głosem prawdziwego Aleksego — kolegi, od którego projekt wziął nazwę. Mały ekran OLED pokazuje buźkę zależną od tego, co akurat robi.

Pierwsza wersja działała w całości offline na NVIDIA Jetson Xavier NX z lokalnym LLM-em. W praktyce odpowiedź zajmowała 20–30 sekund, model ledwo prowadził rozmowę, mikrofon krawatowy był na baterie, a domowej roboty wzmacniacz zbierał zakłócenia z płytki. Wersja druga dzieli pracę na dwie części: Raspberry Pi 5 robi tylko to, co musi się dziać w sali — wake word, nagrywanie, odtwarzanie i buźkę. Wszystko, co ciężkie, dzieje się na Macu mini M2 przez sieć.

Pipeline: Pi nasłuchuje słowa aktywującego i odpowiada „tak". Detekcja aktywności głosowej decyduje, kiedy skończyłeś mówić, a Pi gra krótki wypełniacz („chwileczkę", „momencik"), żeby zamaskować czekanie. Nagranie leci do serwera przez WebSocket, serwer je transkrybuje, wysyła do LLM-a razem z kilkoma ostatnimi turami rozmowy i syntezuje odpowiedź głosem Aleksego. Audio wraca do Pi razem z transkrypcją, odpowiedzią i czasem każdego etapu.

Prompt systemowy każe mu być gospodarzem stanowiska koła: odpowiada w dwóch–czterech zdaniach, poleca jeden z projektów KNI pasujący do rozmowy i zapisuje liczby, daty i godziny słownie, żeby TTS przeczytał je poprawnie. Na Pi działa też mały panel webowy z podglądem buźki na żywo, historią rozmów z czasami etapów i logami — tam też wybiera się sieć Wi-Fi albo głośnik Bluetooth. Klient deployuje się sam: Jenkins na Pi co minutę sprawdza repozytorium, synchronizuje kod i restartuje usługę systemd.`,
    category: "Hardware / AI",
    status: "Zakończony",
    heroImage: "/projects/aleksy-v2/aleksy.webp",
    cardImage: "/projects/aleksy-v2/aleksy.webp",
    techStack: [
      { name: "Python", role: "Klient i serwer" },
      { name: "Raspberry Pi 5", role: "Urządzenie: wake word, audio, OLED" },
      { name: "Mac mini M2", role: "Serwer z modelami (MLX)" },
      { name: "microWakeWord", role: "Detekcja słowa „Aleksy”" },
      { name: "microVAD", role: "Detekcja aktywności głosowej" },
      { name: "Qwen3-ASR 0.6B", role: "Speech-to-Text (MLX, 8-bit)" },
      { name: "OpenAI API", role: "LLM (GPT-6 Luna), fallback na lokalny Qwen3-8B" },
      { name: "OmniVoice", role: "TTS z klonowaniem głosu (MLX)" },
      { name: "WebSockets", role: "Komunikacja Pi ↔ serwer" },
      { name: "Flask", role: "Panel webowy na Pi" },
      { name: "Jenkins", role: "Automatyczny deploy na Pi" },
    ],
    highlights: [
      "Odpowiada sklonowanym głosem prawdziwego Aleksego",
      "Buźka na OLED-zie — maszyna stanów: idle, słucha, myśli, mówi, śpi, błąd",
      "Wypełniacze („chwileczkę”) maskują czas odpowiedzi",
      "Własny hotspot Wi-Fi, gdy nie ma znanej sieci",
      "Głośnik Bluetooth wybierany z panelu webowego",
      "Obudowa drukowana w 3D",
    ],
    gallery: [
      "/projects/aleksy-v2/aleksy.webp",
      "/projects/aleksy-v2/oled-face.webp",
      "/projects/aleksy-v2/case.webp",
      "/projects/aleksy-v2/wm8960-hat.webp",
      "/projects/aleksy-v2/speaker.webp",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Schoji/voice-assistant-v2",
        icon: "github",
      },
    ],
    challenge:
      "Na evencie zawiodła nie AI, tylko sala: głośniki były za ciche na halę pełną stanowisk, a bez internetu Aleksy nie mógł połączyć się z serwerem. Do tego Mac mini M2 okazał się wolny — TTS chodzi na 16 krokach dyfuzji zamiast 32, a odpowiedzi są ucięte do 300 znaków.",
    future:
      "Po evencie doszedł głośnik Bluetooth wybierany z panelu i własny hotspot do konfiguracji Wi-Fi, a obudowa została przedrukowana z lepszego filamentu. Urządzenie jest gotowe na kolejne wydarzenia koła.",
  },
  {
    slug: "shipyard-surfers",
    title: "Shipyard Surfers",
    description:
      "Gra w stylu Subway Surfers sterowana gestami przed kamerą — model YOLO Pose śledzi ręce gracza, a Ty pływasz łodzią między przeszkodami w stoczni.",
    fullDescription: `Shipyard Surfers to endless runner w klimacie portu i stoczni, przygotowany przez KNI na II Piknik Naukowy Morskiego Centrum Nauki. Zamiast klawiatury czy ekranu dotykowego gra się gestami: stajesz przed kamerą, a gra śledzi Twoją sylwetkę w czasie rzeczywistym.

Płyniesz łodzią po trzech torach, omijasz przeszkody z zestawów portowego i pirackiego, zbierasz monety i power-upy: magnes na monety, super skok i podwójne punkty. Machnięcie ręką w bok zmienia tor, uniesienie obu rąk to skok, a szybkie opuszczenie obu rąk to wślizg pod przeszkodą. Trasa jest generowana proceduralnie z segmentów, więc każda runda wygląda inaczej.

Sterowanie ruchem działa w całości lokalnie. Obraz z kamery trafia do modelu YOLO Pose wyeksportowanego do ONNX i uruchamianego przez Unity Inference Engine. Gra przy starcie mierzy opóźnienia i sama wybiera szybszy backend (GPU lub CPU). Punkty kluczowe sylwetki są wygładzane filtrem One Euro i normalizowane względem pozycji neutralnej, a osobne reguły rozpoznają każdy gest. Przed grą krótka kalibracja dopasowuje progi do gracza.

Na stoisku gra wystawia też lokalny serwer WWW z tablicą wyników i podglądem z kamery, aktualizowanymi na żywo przez WebSocket.`,
    category: "Game Dev",
    status: "Zakończony",
    cardImage: "/projects/shipyard_surfers.webp",
    techStack: [
      { name: "Unity 6", role: "Silnik gry (URP)" },
      { name: "C#", role: "Logika gry i sterowania" },
      { name: "YOLO Pose", role: "Wykrywanie sylwetki gracza z kamery" },
      { name: "Unity Inference Engine", role: "Uruchamianie modelu ONNX w grze" },
      { name: "Python", role: "Eksport modelu do ONNX, generowanie sprite'ów" },
      { name: "WebSockets", role: "Tablica wyników i podgląd kamery na żywo" },
      { name: "Kenney Assets", role: "Modele 3D portu, statków i fabryki" },
    ],
    highlights: [
      "Sterowanie gestami przez zwykłą kamerę",
      "Rozpoznawanie gestów: zmiana toru, skok, wślizg",
      "Kalibracja pod konkretnego gracza",
      "Automatyczny wybór backendu GPU / CPU",
      "Proceduralnie generowana trasa i power-upy",
      "Tablica wyników na żywo w przeglądarce",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/KNI-PM-Szczecin/ShipyardSurfers",
        icon: "github",
      },
    ],
  },
];
