import connectMongoDB from "@/database/mongodb";
import Artist from "@/models/artist";
import { IArtist } from "@/models/interfaces";

const findAll: () => Promise<IArtist[]> = async () => {
    await connectMongoDB();
    const artists: IArtist[] = await Artist.find();
    return artists;
};

const find: (id: string) => Promise<IArtist | null> = async (id: string) => {
    await connectMongoDB();
    const artist: IArtist | null = await Artist.findById(id);
    return artist;
};

const create: (artist: IArtist) => Promise<IArtist> = async (artist: IArtist) => {
    await connectMongoDB();
    const response = await Artist.create(artist);
    return response;
};

const deleteOne: (id: string) => Promise<void> = async (id: string) => {
    await connectMongoDB();
    await Artist.deleteOne({ _id: id });
};

const update: (artist: IArtist) => Promise<IArtist> = async (artist: IArtist) => {
    await connectMongoDB();
    await Artist.updateOne({ _id: artist._id }, artist);
    return artist;
};

export { findAll, find, create, deleteOne, update };
