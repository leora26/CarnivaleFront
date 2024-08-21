import MediaContent from "./MediaContent";

class AllStories{
    id: number;
    title: string;
    subTitle: string;
    createdAt: string;
    mediaContents: MediaContent[];


    constructor(id: number, title: string, subTitle: string, createdAt: string, mediaContents: MediaContent[]) {
        this.id = id;
        this.title = title;
        this.subTitle = subTitle;
        this.createdAt = createdAt;
        this.mediaContents = mediaContents;
    }
}

export default AllStories;