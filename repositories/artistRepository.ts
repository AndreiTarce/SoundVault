import connectMongoDB from "@/database/mongodb";
import Artist from "@/models/artist";
import { IArtist } from "@/models/interfaces";

const findArtists: () => Promise<IArtist[]> = async () => {
    await connectMongoDB();
    const artists: IArtist[] = await Artist.find();
    return artists;
};

const findArtist: (id: string) => Promise<IArtist | null> = async (id: string) => {
    await connectMongoDB();
    const artist: IArtist | null = await Artist.findById(id);
    return artist;
};

export { findArtists, findArtist };
