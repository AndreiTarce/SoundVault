import { getArtists } from "@/services/artistService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, response: NextResponse) {
    try {
        const artists = await getArtists();
        return Response.json({ artists }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
