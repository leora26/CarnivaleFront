import React from "react";
import {CheckBoxStyled} from "../styled/global/CheckBox.styled";

interface CheckBoxProps {
    label: string;
    checkboxId: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({label, checkboxId}) => {
    return (
        <CheckBoxStyled>
            <input type="checkbox" id={checkboxId}/>
            <label htmlFor={checkboxId}>{label}</label>
        </CheckBoxStyled>
    )
}

export default CheckBox;