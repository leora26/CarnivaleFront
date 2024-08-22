import React from "react";
import {TextAreaV1Styled} from "../styled/global/TextAreaV1.styled";

interface TextAreaProps {
    placeholder: string;
    backgroundColor: string;
}

const TextAreaV1: React.FC<TextAreaProps> = ({placeholder, backgroundColor}) => {
    return (
        <TextAreaV1Styled backgroundColor={backgroundColor} placeholder={placeholder}/>
    )
}

export default TextAreaV1;