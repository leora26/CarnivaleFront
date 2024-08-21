import {Input, InputV1Styled, Label} from "../styled/global/InputV1.styled";
import React from "react";

interface InputV1Props {
    type: string;
    label: string;
    inputId: string;
}

const InputV1: React.FC<InputV1Props> = ({type, inputId, label}) => {
    return (
        <InputV1Styled>
            <Label htmlFor={inputId}>{label}</Label>
            <Input id={inputId} type={type}/>
        </InputV1Styled>
    )
}

export default InputV1;