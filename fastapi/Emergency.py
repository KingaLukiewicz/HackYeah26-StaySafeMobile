from fastapi import FastAPI, HTTPException
from fastapi.responses import PlainTextResponse
import os

app = FastAPI()

# Ścieżka do Twojego pliku
FILE_PATH = "ApiResponse.txt"

@app.get("/plik", response_class=PlainTextResponse)
def read_file():
    # Sprawdzenie, czy plik istnieje, aby uniknąć błędów
    if not os.path.exists(FILE_PATH):
        raise HTTPException(status_code=404, detail="Plik ApiResponse.txt nie istnieje.")
    
    # Blok 'with' automatycznie otwiera i zamyka plik po jego przeczytaniu
    with open(FILE_PATH, "r", encoding="utf-8") as file:
        content = file.read()
        
    return content