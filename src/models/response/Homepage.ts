import Category from "./Category";

class Homepage {
    constructor(
        public bannerText: string,
        public gif1: string,
        public gif2: string,
        public img1: string,
        public img2: string,
        public img3: string,
        public img4: string,
        public categoryDTOs: Category[]
    ){}
}

export default Homepage;