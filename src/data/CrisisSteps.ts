//Mockup

export interface StepItem {
  title: string;
  text: string;
  locationInfo?: string; // Opcjonalny punkt zbiórki / lokalizacja
}

export const crisisData: Record<
  string,
  { title: string; toneColor: string; steps: StepItem[] }
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
    toneColor: "#b9622c", // Pomarańczowo-brązowy
    steps: [
      {
        title: "Schroń się w budynku",
        text: "Przejdź do piwnicy lub pomieszczenia bez okien z dala od ścian zewnętrznych.",
      },
      {
        title: "Zabierz zestaw awaryjny",
        text: "Weź dokumenty, zapas wody, leki oraz naładowany telefon z powerbankiem.",
      },
      {
        title: "Nasłuchuj komunikatów",
        text: "Sprawdzaj oficjalne komunikaty rządowe w radio lub w aplikacji StaySafe.",
        locationInfo: "Najbliższy schron: ul. Marszałkowska 12",
      },
    ],
  },
};
