import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=hospital&lat=${lat}&lon=${lon}&radius=5000`;
    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
}
