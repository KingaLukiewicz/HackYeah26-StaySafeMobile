# StaySafeMobile 🛡️

StaySafeMobile to osobisty dowódca ewakuacji, który rozwiązuje problem paraliżu decyzyjnego w sytuacjach kryzysowych, zastępując pasywne alerty SMS aktywnym, cyfrowym przewodnikiem. Aplikacja błyskawicznie powiadamia o zagrożeniu i prowadzi użytkownika krok po kroku za pomocą prostych, dostosowanych do sytuacji instrukcji głosowych (hands-free).

---

## 🚀 Jak uruchomić projekt lokalnie

Projekt składa się z aplikacji mobilnej (React Native / Expo) oraz lekkiego backendu (Python / FastAPI). 
Aby przetestować aplikację, uruchom równolegle oba środowiska:

### 1. Backend (FastAPI)
1. Upewnij się, że masz zainstalowanego Pythona (wersja 3.7+).
2. Zainstaluj wymagane biblioteki w terminalu:
```bash
pip install fastapi uvicorn
```
3. W folderze z backendem (fastapi) uruchom serwer:
```bash
uvicorn Emergency:app
```

(Serwer działa pod adresem: http://localhost:8000. Aby zasymulować alarm podczas testów, zmień status w pliku ApiResponse.txt z "OK" na np. "fire").

### 2. Frontend (Expo)
1. Upewnij się, że masz zainstalowane Node.js.

2. W terminalu przejdź do folderu głównego aplikacji i zainstaluj potrzebne zależności:

```bash
npm install
```
Uruchom serwer Expo (do podglądu aplikacji na telefonie konieczne jest dodanie flagi `--tunnel`):

```bash
npx expo start --tunnel
```

Zeskanuj kod QR w aplikacji Expo Go na swoim smartfonie lub wciśnij w, aby uruchomić widok webowy w przeglądarce.

### Technologie
Frontend: React Native, Expo, Expo Router, TypeScript, Expo Speech (TTS)

Backend: Python, FastAPI, Uvicorn

### Autorzy
- Kinga Łukiewicz
- Tomasz Naszkowski
- Aleksandra Raczyńska
