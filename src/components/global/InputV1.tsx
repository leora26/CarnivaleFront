import React, { forwardRef } from "react";
import { Input, InputV1Styled, Label } from "../styled/global/InputV1.styled";

interface InputV1Props {
    type: string;
    label: string;
    inputId: string;
}

const InputV1 = forwardRef<HTMLInputElement, InputV1Props>(({ type, inputId, label }, ref) => {
    return (
        <InputV1Styled>
            <Label htmlFor={inputId}>{label}</Label>
            <Input id={inputId} type={type} ref={ref} required={true}/>
        </InputV1Styled>
    );
});

export default InputV1;
