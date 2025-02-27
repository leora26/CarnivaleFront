import React, {forwardRef} from "react";
import {TextAreaV2Styled} from "../styled/global/TextAreaV2.styled";

interface TextAreaProps {
    label: string;
    id: string
}

const TextAreaV2 = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ label, id }, ref) => {
    return (
        <TextAreaV2Styled id={id}>
            <label>{label}</label>
            <textarea name={label} ref={ref}></textarea>
        </TextAreaV2Styled>
    )
});

export default TextAreaV2;