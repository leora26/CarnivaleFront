import React from "react";
import {InputErrorMessageStyled} from "../styled/global/InputErrorMessage.styled";

interface InputErrorMessageProps {
    message: string;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({message}) => {
    return (
        <InputErrorMessageStyled>
            {message}
        </InputErrorMessageStyled>
    )
}

export default InputErrorMessage;