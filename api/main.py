import os
import psycopg
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()
DB_URL = os.environ["DATABASE_URL"]

class NoteIn(BaseModel):
    body: str

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/notes")
def list_notes():
    with psycopg.connect(DB_URL) as conn:
        rows = conn.execute(
            "SELECT id, body, created_at FROM notes ORDER BY id DESC"
        ).fetchall()
    return [{"id": r[0], "body": r[1], "created_at": str(r[2])} for r in rows]

@app.post("/notes", status_code=201)
def create_note(note: NoteIn):
    with psycopg.connect(DB_URL) as conn:
        conn.execute("INSERT INTO notes (body) VALUES (%s)", (note.body,))
    return {"ok": True}
