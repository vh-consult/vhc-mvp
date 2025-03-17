"use client";
import { useState } from "react";

export default function AIAssistant() {
  const [diagnosis, setDiagnosis] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientData: diagnosis }),
    });
    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <div>
      <h2>AI Health Assistant</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          placeholder="Enter patient symptoms & diagnosis..."
        />
        <button type="submit">Get AI Advice</button>
      </form>
      {response && <p><strong>AI Response:</strong> {response}</p>}
    </div>
  );
}
