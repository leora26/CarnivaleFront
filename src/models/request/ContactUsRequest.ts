class ContactUsRequest {

    constructor(
        public fullName: string,
        public email: string,
        public topic: string,
        public message: string
    ) {
    }
}

export default ContactUsRequest;