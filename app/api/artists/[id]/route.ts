import { getArtist } from "@/services/artistService";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        const artist = await getArtist(id);
        return Response.json({ artist }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
