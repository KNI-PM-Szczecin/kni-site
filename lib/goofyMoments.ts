export interface GoofyPhoto {
  src: string;
  caption: string;
}

export interface GoofyMoment {
  event: string;
  photos: GoofyPhoto[];
}

export const GOOFY_MOMENTS: GoofyMoment[] = [
  {
    event: "Hackathon Morski 2026",
    photos: [
      { src: "/hackathons/goofy_hackathon/full_send.jpg", caption: "Full send: commitujemy prosto na main." },
      { src: "/hackathons/goofy_hackathon/hard_work.jpg", caption: "Prawdziwy MVP hackathonu Teamwork: Jeden śpi, drugi pracuje." },
      { src: "/hackathons/goofy_hackathon/npc_face.jpg", caption: "Informatyczny Poker Face." },
      { src: "/hackathons/goofy_hackathon/pointer.jpg", caption: "To jest ten słynny pointer?" },
      { src: "/hackathons/goofy_hackathon/stare_excercise.jpg", caption: "Precyzja jak przy pracy na produkcji o 3 w nocy." },
      { src: "/hackathons/goofy_hackathon/focus.jpg", caption: "Skupienie: jak przy code review o 4 nad ranem." },
      { src: "/hackathons/goofy_hackathon/laugh.jpg", caption: "Śmiech: najlepszy debugger." },
      { src: "/hackathons/goofy_hackathon/food.jpg", caption: "Catering: budżet nieograniczony, wykorzystanie również." },
      { src: "/hackathons/goofy_hackathon/more_food.jpg", caption: "Darmo to uczciwa cena." },
      {src: "/hackathons/goofy_hackathon/stalking.jpg", caption: "Karol i mistrzowie drugiego planu." },
      {src: "/hackathons/goofy_hackathon/proof.jpg", caption: "Dowód na to, że niektórzy przeżyją bunt AI." },
      {src: "/hackathons/goofy_hackathon/spanko.jpg", caption: "Nie moge mam spanko x 3 ." },
      {src: "/hackathons/goofy_hackathon/lodowa.jpg", caption: "Ah ta inżynieria" },
      {src: "/hackathons/goofy_hackathon/macgayver.jpg", caption: "MacGyverzy w akcji." },
    ],
  },
];
