import {ContactUsContainer, ContactUsStyled} from "../components/styled/contactUs/ContactUs.styled";
import {useNavigate, useParams} from "react-router-dom";
import {ContactUsForm, TextAreaButtonContainer} from "../components/styled/contactUs/ContactUsForm";
import ContactUsPicture from "../assets/pictures/contactUs/TRIP FARM OF IDEAS-0053.jpg"
import InputV1 from "../components/global/InputV1";
import TextAreaV2 from "../components/global/TextAreaV2";
import {IoIosArrowRoundForward} from "react-icons/io";
import {useEffect, useRef, useState} from "react";
import ContactUsRequest from "../models/request/ContactUsRequest";

const ContactUs = () => {

    const {theme} = useParams();
    const navigate = useNavigate();

    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const [topic, setTopic] = useState("");
    const messageRef= useRef<HTMLTextAreaElement>(null);

    useEffect(() => {

        switch (theme) {
            case "getInTouch": setTopic("Get in touch with us to learn more about Carnivale");
            break;
            case "contactUs": setTopic("Contact us to ask any questions!");
            break;
        }

    }, [theme]);

    const handleTopicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTopic(event.target.value);
    };

    const handleFormSubmit = () => {

        const fullName = fullNameRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        const message = messageRef.current?.value ?? "";

        const request: ContactUsRequest = new ContactUsRequest(fullName, email, topic, message);

        navigate("/")
    }

    return (
        <ContactUsStyled>
            <ContactUsContainer>
                <img src={ContactUsPicture} alt=""/>

                <ContactUsForm>
                    <h2>Contact us</h2>
                    <InputV1 ref={fullNameRef} inputId="full-name" type="text" label="Full name"/>
                    <InputV1 ref={emailRef} inputId="email" type="text" label="Email"/>
                    <InputV1 value={topic} onChange={handleTopicChange} inputId="topic" type="text" label="Topic"/>
                    <TextAreaButtonContainer>
                        <TextAreaV2 ref={messageRef} label="Message" id="message"/>
                        <IoIosArrowRoundForward className="submitButton" onClick={handleFormSubmit}/>
                    </TextAreaButtonContainer>
                </ContactUsForm>
            </ContactUsContainer>
        </ContactUsStyled>
    )
}

export default ContactUs;