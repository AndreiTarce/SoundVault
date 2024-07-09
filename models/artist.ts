import mongoose, { Schema } from "mongoose";
import { IAlbum, IArtist, ISong } from "./interfaces";

const songSchema = new Schema<ISong>({
    title: String,
    length: String,
});

const albumSchema = new Schema<IAlbum>({
    title: String,
    songs: [songSchema],
    description: String,
});

const artistSchema = new Schema<IArtist>({
    name: String,
    albums: [albumSchema],
});

const Artist = mongoose.models.Artist || mongoose.model("Artist", artistSchema);

export default Artist;
