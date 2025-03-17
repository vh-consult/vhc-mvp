import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { patientData } = await req.json();

    const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "mistral",
            prompt: `Give medical advice for: ${patientData}`
        }),
    });

    const data = await res.json();
    return NextResponse.json({ response: data.response });
}
