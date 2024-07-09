import { IArtist } from "@/models/interfaces";
import { findArtist, findArtists } from "@/repositories/artistRepository";

const getArtists: () => Promise<IArtist[]> = async () => {
    const artists = await findArtists();
    return artists;
};

const getArtist: (id: string) => Promise<IArtist | null> = async (id: string) => {
    const artist: IArtist | null = await findArtist(id);
    return artist;
};

export { getArtists, getArtist };
