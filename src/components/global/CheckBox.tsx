import React from "react";
import {CheckBoxStyled} from "../styled/global/CheckBox.styled";

interface CheckBoxProps {
    label: string;
    checkboxId: string;
    backgroundColor: string;
    borderColor: string;
    margin: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({margin, label, checkboxId, backgroundColor, borderColor}) => {
    return (
        <CheckBoxStyled margin={margin} borderColor={borderColor} backgroundColor={backgroundColor}>
            <input type="checkbox" id={checkboxId}/>
            <label htmlFor={checkboxId}>{label}</label>
        </CheckBoxStyled>
    );
}

export default CheckBox;
