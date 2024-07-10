import { IArtist } from "@/models/interfaces";
import { create, deleteOne, find, findAll, update } from "@/repositories/artistRepository";

const getArtists: () => Promise<IArtist[]> = async () => {
    const artists = await findAll();
    return artists;
};

const getArtist: (id: string) => Promise<IArtist | null> = async (id: string) => {
    const artist: IArtist | null = await find(id);
    return artist;
};

const createArtist: (artist: IArtist) => Promise<IArtist> = async (artist: IArtist) => {
    const createdArtist = await create(artist);
    return createdArtist;
};

const deleteArtist: (id: string) => Promise<void> = async (id: string) => {
    await deleteOne(id);
};

const updateArtist: (artist: IArtist) => Promise<IArtist> = async (artist: IArtist) => {
    const updatedArtist = await update(artist);
    return updatedArtist;
};

export { getArtists, getArtist, createArtist, deleteArtist, updateArtist };
