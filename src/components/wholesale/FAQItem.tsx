import {FAQItemStyled, QuestionContainer} from "../styled/wholesale/FAQItem.styled";
import QuestionAnswer from "../../models/response/QuestionAnswer";
import {JSX, useState} from "react";
import {FaAngleDown} from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa";

interface FAQItemProps {
    faq: QuestionAnswer
}

const FAQItem = ({faq}: FAQItemProps): JSX.Element => {

    const [isOpen, seOpen] = useState(false);

    const toggleOpen = () => {
        seOpen((prevState) => !prevState);
    }

    return (
        <FAQItemStyled isOpen={isOpen} key={faq.id} onClick={toggleOpen}>
            <QuestionContainer>
                <span>{faq.titleEn}</span>
                {isOpen ? <FaAngleUp/> : <FaAngleDown/>}
            </QuestionContainer>
            {isOpen ? <p>{faq.descriptionEn}</p> : null}
        </FAQItemStyled>
    )
}

export default FAQItem;