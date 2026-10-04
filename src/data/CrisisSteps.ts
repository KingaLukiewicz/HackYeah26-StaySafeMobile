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
    toneColor: "#2f7d56",
    locationOptions: [
      {
        id: "inside",
        label: "JESTEŚ W BUDYNKU (Mieszkanie / Dom / Biuro)",
      },
      {
        id: "outside",
        label: "JESTEŚ NA ZEWNĄTRZ (Pieszo)",
      },
      {
        id: "vehicle",
        label: "JESTEŚ W POJEŹDZIE (Samochód / Autobus)",
      },
    ],
    stepsByLocation: {
      inside: [
        {
          title: "",
          text: "Czy widzisz dym albo czujesz zapach spalenizny?",
          question: true,
          options: [
            {
              id: "inside_danger",
              label: "TAK",
              responseTitle: "",
              responseText:
                "Nie wracaj po rzeczy ani zwierzęta. Schodami opuść budynek i idź do wyjścia awaryjnego. Zamykaj za soba drzwi. Oddal się od budynku na bezpieczną odległość.",
            },
            {
              id: "inside_safe",
              label: "NIE",
              responseTitle: "",
              responseText:
                "Zabezpiecz lokal: Zamknij okna, wyłącz gaz i prąd. Zabierz ze sobą dokumenty, leki przyjmowane na stałe, wodę, telefon i powerbank. Wyjdź na zewnątrz schodami, nie używaj wind. Jeśli masz zwierzęta gospodarskie, spraw, aby ich ucieczka była możliwa.",
            },
          ],
        },
        {
          title: "",
          text: "Zamelduj się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Postępuj zgodnie z ich poleceniami.",
        },
      ],
      outside: [
        {
          title: "",
          text: "Wyznacz kierunek ucieczki: sprawdź wiatr. Uciekaj pod wiatr albo prostopadle do niego. Nigdy z wiatrem. Wybieraj drogi utwardzone, szerokie ulice i place. Unikaj traw, zarośli i wąwozów.",
        },
        {
          title: "",
          text: "Jeśli wchodzisz w dym, zasłoń usta i nos mokrą tkaniną. Poruszaj się w pozycji pochylonej, ponieważ czystsze powietrze jest przy ziemi.",
        },
        {
          title: "",
          text: "Odcięta droga: wejdź na beton, parking, zaorane pole albo do zbiornika wodnego. Jeśli nie ma wyjścia, padnij w rowie twarzą do ziemi, zasłoń głowę i ciało odzieżą.",
        },
        {
          title: "",
          text: "Zamelduj się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Postępuj zgodnie z ich poleceniami.",
        },
      ],
      vehicle: [
        {
          title: "",
          text: "Decyzja o jeździe. Jeśli możesz, wyjedź od razu z obszaru zagrożenia, z dala od dymu i płonących budynków. Nie blokuj drogi ewakuacyjnej.",
        },
        {
          title: "",
          text: "Widoczność spada do zera albo droga jest zablokowana. Zostaw samochód w bezpiecznym miejscu, jeśli sytuacja jest niebezpieczna, i odejdź pieszo w kierunku wyznaczonej strefy ewakuacyjnej.",
        },
        {
          title: "",
          text: "Po ewakuacji: meldujesz się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Nie wracasz po rzeczy ani zwierzęta do odwołania alarmu.",
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
  flood: {
    title: "Powódź",
    toneColor: "#2f7d56",
    locationOptions: [
      {
        id: "water_already",
        label: "WODA JEST JUŻ POD DOMEM / BRAK MOŻLIWOŚCI UCIECZKI",
      },
      {
        id: "water_not_yet",
        label: "WODA JESZCZE NIE JEST POD DOMEM / ALARM POWODZIOWY",
      },
      {
        id: "car",
        label: "JESTEŚ W SAMOCHODZIE",
      },
    ],
    stepsByLocation: {
      water_already: [
        {
          title: "",
          text: "Uszczelnij wszystkie okna, wejścia i drzwi garażowe. Wyłącz prąd, wodę i gaz. Odłącz akumulator w samochodzie.",
        },
        {
          title: "",
          text: "Jeśli są duże zwierzęta gospodarskie, zabezpiecz ich ucieczkę. Jeśli jest możliwość zabezpiecz w bezpiecznym miejscu lub jeśli nie masz czasu, spuść je ze smyczy.",
        },
        {
          title: "",
          text: "Zabierz wszystkich mieszkańców na najwyższe piętro.",
        },
        {
          title: "",
          text: "Jeśli masz czas, zabierz wartościowe przedmioty: żywność długoterminową, zapas wody, dokumenty, akty własności, paszporty, polisy ubezpieczeniowe i nośniki cyfrowe. Nasłuchuj radia zasilanego bateriami na częstotliwościach lokalnej stacji.",
        },
        {
          title: "",
          text: "Przygotuj plecak ewakuacyjny. Najważniejsze przedmioty: najpotrzebniejsze dokumenty, posiłki na dwa dni, apteczka, woda, butelka filtrująca z nowym filtrem, gotówka w małych nominałach, ubranie na zmianę, radio na baterie, latarka, zapalniczka, maski oddechowe, mapa, kompas, GPS, otwieracz do puszek, nóż, ołówek i notes, sztućce, kurtka przeciwdeszczowa, śpiwór, worki na śmieci, mydło, żel do dezynfekcji, kombinerki, łom, narzędzia wielofunkcyjne, gumy i sznurki, opaska zaciskowa.",
        },
        {
          title: "",
          text: "Po ewakuacji: meldujesz się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Nie wracasz do domu, dopóki nie zostanie odwołany alarm.",
        },
      ],
      water_not_yet: [
        {
          title: "",
          text: "Woda jest stosunkowo daleko, alarm przeciwpowodziowy. Zaopatrz się w zapas żywności i wody na cztery dni. Uszczelnij wszystkie okna, wejścia i drzwi garażowe. Naładuj telefon i utrzymuj wysoki poziom baterii. Zabezpiecz ważne dokumenty w workach strunowych i wynieś je na wyższe kondygnacje lub do bezpiecznego miejsca. Zanieś sprzęt AGD i cenne przedmioty na wyższe kondygnacje. W gospodarstwie rolnym przygotuj zwierzęta hodowlane do ewakuacji, przenieś paszę w miejsce nie zagrożone zalaniem, przygotuj zapas paszy na trzy doby i zgromadź dodatkowe zapasy wody dla zwierząt.",
        },
        {
          title: "",
          text: "Nasłuchuj radia zasilanego bateriami na częstotliwościach lokalnej stacji. Spakuj plecak ewakuacyjny. Jeśli jest możliwość, przeprowadź samodzielną ewakuację i przejdź do planu samochód.",
        },
        {
          title: "",
          text: "Po ewakuacji: meldujesz się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Nie wracasz do domu, dopóki nie zostanie odwołany alarm.",
        },
      ],
      car: [
        {
          title: "",
          text: "Jeśli zbliżasz się do zatopionej drogi, zawróć i znajdź alternatywną trasę. Kieruj się w stronę terenów niezagrożonych powodzią.",
        },
        {
          title: "",
          text: "W wypadku awarii samochodu, wysiądź z niego natychmiast i kieruj się na tereny wyżej położone.",
        },
        {
          title: "",
          text: "Po ewakuacji: meldujesz się w punkcie zbiórki albo u służb, aby odnotowali, że żyjesz. Nie wracasz do domu, dopóki nie zostanie odwołany alarm.",
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
