import React, { forwardRef } from "react";
import { Input, InputV1Styled, Label } from "../styled/global/InputV1.styled";

interface InputV1Props {
    type: string;
    label: string;
    inputId: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputV1 = forwardRef<HTMLInputElement, InputV1Props>(({ type, inputId, label, value, onChange }, ref) => {
    return (
        <InputV1Styled>
            <Label htmlFor={inputId}>{label}</Label>
            <Input id={inputId} type={type} ref={ref} required={true} value={value} onChange={onChange}/>
        </InputV1Styled>
    );
});

export default InputV1;
