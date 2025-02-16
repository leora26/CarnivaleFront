import QuestionAnswer from "./QuestionAnswer";

class FAQ {

    constructor(
        public aboutUs: QuestionAnswer[],
        public delivery: QuestionAnswer[],
        public products: QuestionAnswer[]
    ) {
    }
}

export default FAQ;