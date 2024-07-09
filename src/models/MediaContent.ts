class MediaContent{
    id: number;
    url: string;
    mediaType: string;


    constructor(id: number, url: string, mediaType: string) {
        this.id = id;
        this.url = url;
        this.mediaType = mediaType;
    }
}

export default MediaContent;