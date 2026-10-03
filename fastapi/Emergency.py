from fastapi import FastAPI, HTTPException
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)
FILE_PATH = "ApiResponse.txt"


@app.get("/Emergency", response_class=PlainTextResponse)
def read_file():
    if not os.path.exists(FILE_PATH):
        raise HTTPException(status_code=404, detail="Plik ApiResponse.txt nie istnieje.")
    
    with open(FILE_PATH, "r", encoding="utf-8") as file:
        content = file.read()
        
    return content