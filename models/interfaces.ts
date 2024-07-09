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
    name: string;
    albums: IAlbum[];
}
