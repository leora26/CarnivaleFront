import MediaContent from "./MediaContent";

class AllStories{

    constructor(
        public id: number,
        public titleEn: string,
        public titleNl: string,
        public titleFr: string,
        public descriptionEn: string,
        public descriptionNl: string,
        public descriptionFr: string,
        public createdAt: string,
        public type: string,
        public mediaContentDTOS: MediaContent[],
        public tags: string[]
    ) {
    }
}

export default AllStories;