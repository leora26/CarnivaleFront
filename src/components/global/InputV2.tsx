import React, { forwardRef } from "react";
import {InputV2Styled, Input} from "../styled/global/InputV2.styled";

interface InputV2Props {
    type: string;
    inputId: string;
    placeholder: string;
    backgroundColor: string;
}

const InputV2 = forwardRef<HTMLInputElement, InputV2Props>(({ type, inputId, backgroundColor, placeholder }, ref) => {
    return (
        <InputV2Styled>
            <Input backgroundColor={backgroundColor} placeholder={placeholder} id={inputId} type={type} ref={ref} required={true}/>
        </InputV2Styled>
    );
});

export default InputV2;
