import { Types } from "mongoose";

export interface ISong {
    title: string;
    length: string;
}

export interface IAlbum {
    title: string;
    songs: ISong[];
    description: string;
}

export interface IArtist {
    _id: Types.ObjectId;
    name: string;
    albums: IAlbum[];
}
