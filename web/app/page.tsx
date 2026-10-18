"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [body, setBody] = useState("");

  const load = () => fetch("/api/notes").then((r) => r.json()).then(setNotes);
  useEffect(() => { load(); }, []);

  const submit = async () => {
    await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body }),
    });
    setBody(""); load();
  };

  return (
    <main style={{ padding: 24 }}>
      <h1>Status Board</h1>
      <input value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={submit}>Post</button>
      <ul>{notes.map((n) => <li key={n.id}>{n.body}</li>)}</ul>
    </main>
  );
}
