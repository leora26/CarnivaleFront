import MediaContent from "./MediaContent";

class AllStories{
    id: number;
    title: string;
    subTitle: string;
    createdAt: string;
    type: string;
    mediaContents: MediaContent[];


    constructor(id: number, title: string, subTitle: string, createdAt: string, type: string, mediaContents: MediaContent[]) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.createdAt = createdAt;
        this.type = type
        this.mediaContents = mediaContents;
    }
}

export default AllStories;