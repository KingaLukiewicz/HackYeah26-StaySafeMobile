//Mockup

export interface StepOption {
  id: string;
  label: string;
  responseTitle: string;
  responseText: string;
}

export interface StepItem {
  title: string;
  text: string;
  locationInfo?: string; // Opcjonalny punkt zbiórki / lokalizacja
  question?: boolean;
  options?: StepOption[];
}

export interface LocationOption {
  id: string;
  label: string;
  description?: string;
}

export const crisisData: Record<
  string,
  {
    title: string;
    toneColor: string;
    steps: StepItem[];
    locationOptions?: LocationOption[];
    stepsByLocation?: Record<string, StepItem[]>;
  }
> = {
  fire: {
    title: "Pożar",
    toneColor: "#bc3b32", // Czerwono-bordowy
    steps: [
      {
        title: "Oddal się od ognia i dymu",
        text: "Przejdź do bezpiecznej strefy. Jeśli to możliwe, zasłoń usta i nos mokrą chustą.",
      },
      {
        title: "Nie używaj windy",
        text: "Do ewakuacji korzystaj wyłącznie z klatek schodowych i wyjść awaryjnych.",
      },
      {
        title: "Powiadom służby",
        text: "Zadzwoń pod numer alarmowy 112, gdy będziesz w bezpiecznym miejscu.",
        locationInfo: "Punkt zbiórki: Bezpieczny teren przed budynkiem",
      },
    ],
  },
  flood: {
    title: "Powódź",
    toneColor: "#2962ff", // Niebieski
    steps: [
      {
        title: "Udaj się na wyższe kondygnacje",
        text: "Przejdź na piętro lub dach budynku. Unikaj piwnic i parteru.",
      },
      {
        title: "Odłącz prąd i gaz",
        text: "Zabezpiecz instalacje domowe, jeśli masz do nich bezpieczny dostęp.",
      },
      {
        title: "Czekaj na ratunek",
        text: "Przygotuj telefon i elementy odblaskowe, aby ułatwić służbom lokalizację.",
        locationInfo: "Punkt zbiórki: Okoliczny teren wysoko położony",
      },
    ],
  },
  war: {
    title: "Zagrożenie wojenne",
    toneColor: "#2f7d56", // Zielony
    locationOptions: [
      {
        id: "outside",
        label: "JESTEŚ NA ZEWNĄTRZ / W POJEŹDZIE",
      },
      {
        id: "inside",
        label: "JESTEŚ W BUDYNKU / MIESZKANIU",
      },
    ],
    stepsByLocation: {
      outside: [
        {
          title: "",
          text: "Jeśli jesteś w pojeździe, zjedź i zostaw samochód w bezpiecznym miejscu.",
        },
        {
          title: "",
          text: "Widzisz w pobliżu trwały budynek lub przejście podziemne?",
          question: true,
          options: [
            {
              id: "yes",
              label: "TAK",
              responseTitle: "",
              responseText: "Wbiegnij do korytarza lub klatki schodowej.",
            },
            {
              id: "no",
              label: "NIE",
              responseTitle: "",
              responseText:
                "Padnij w rowie, za murkiem lub płasko na ziemi. Twarzą do dołu, zasłoń kark.",
            },
          ],
        },
        {
          title: "",
          text: "",
        },
      ],
      inside: [
        {
          title: "",
          text: "Czy masz plecak ewakuacyjny?",
          question: true,
          options: [
            {
              id: "has_bag",
              label: "TAK",
              responseTitle: "",
              responseText:
                "Czy wiesz dokładnie, gdzie w zasięgu 2–3 minut pieszo jest wyznaczony schron lub podziemny garaż?",
            },
            {
              id: "no_bag",
              label: "NIE",
              responseTitle: "",
              responseText:
                "Weź dokumenty, gotówkę, leki regularnie przyjmowane, apteczkę albo podstawowe środki przeciwbólowe i opatrunkowe, wodę, telefon i powerbank, latarkę z baterią. To wszystko włóż do plecaka lub torby.",
            },
          ],
        },
        {
          title: "",
          text: "Czy wiesz dokładnie, gdzie w zasięgu 2–3 minut pieszo jest wyznaczony schron lub podziemny garaż?",
          question: true,
          options: [
            {
              id: "shelter_yes",
              label: "TAK",
              responseTitle: "",
              responseText:
                "Schodami idź bezpośrednio do schronu / garażu. Nie używaj windy! Jeśli po drodze widzisz zawory gazu, wody czy bezpieczniki wyłącz.",
            },
            {
              id: "shelter_no",
              label: "NIE",
              responseTitle: "",
              responseText:
                "Zostajesz w mieszkaniu/budynku. Nie wychodź na zewnątrz! Wyłącz gaz, prąd i wodę. Idź do pomieszczenia bez okien (przedpokój, korytarz, łazienka, piwnica). Zachowaj zasadę 2 ścian (min. dwie ściany od zewnętrza). Usiądź/połóż się przy ścianie nośnej.",
            },
          ],
        },
        {
          title: "",
          text: "",
        },
      ],
    },
    steps: [
      {
        title: "Wybierz, gdzie jesteś teraz",
        text: "Na podstawie Twojej lokalizacji pokażemy Ci właściwe kroki bezpieczeństwa.",
      },
    ],
  },
};
