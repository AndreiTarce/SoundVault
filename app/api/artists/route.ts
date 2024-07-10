import { createArtist, deleteArtist, getArtists, updateArtist } from "@/services/artistService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, response: NextResponse) {
    try {
        const artists = await getArtists();
        return Response.json({ artists }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return Response.json({ message: error.message }, { status: 500 });
        }

        return Response.json({ message: "Server error" }, { status: 500 });
    }
}

export async function POST(req: NextRequest, response: NextResponse) {
    try {
        const { artist } = await req.json();
        const createdArtist = await createArtist(artist);
        return Response.json({ artist: createdArtist }, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return Response.json({ message: error.message }, { status: 500 });
        }

        return Response.json({ message: "Server error" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, response: NextResponse) {
    try {
        const { id } = await req.json();
        await deleteArtist(id);
        return new Response(null, { status: 204 });
    } catch (error) {
        if (error instanceof Error) {
            return Response.json({ message: error.message }, { status: 500 });
        }

        return Response.json({ message: "Server error" }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest, response: NextResponse) {
    try {
        const { artist } = await req.json();
        const updatedArtist = await updateArtist(artist);
        return Response.json({ artist: updatedArtist }, { status: 200 });
    } catch (error) {
        if (error instanceof Error) {
            return Response.json({ message: error.message }, { status: 500 });
        }

        return Response.json({ message: "Server error" }, { status: 500 });
    }
}
