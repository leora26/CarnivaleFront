class QuestionAnswer {

    constructor(
        public id: string,
        public titleEn: string,
        public titleNl: string,
        public titleFr: string,
        public descriptionEn: string,
        public descriptionNl: string,
        public descriptionFr: string,
        public questionAnswerCategory: "ABOUT_US" | "DELIVERY" | "PRODUCTS"
    ) {
    }
}

export default QuestionAnswer;