import { styled } from "styled-components";

interface CheckBoxStyledProps {
    backgroundColor: string;
    borderColor: string;
    margin: string;
}

export const CheckBoxStyled = styled.div<CheckBoxStyledProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${({margin}) => margin};
    
    input[type="checkbox"] {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid ${({borderColor}) => borderColor};
        border-radius: 4px;
        margin-right: 10px;
        background-color: ${({ backgroundColor }) => backgroundColor}; /* Set custom background color */
        position: relative;
        cursor: pointer;

        &:checked {
            background-color: ${({ backgroundColor }) => backgroundColor};
        }

        &:checked::before {
            content: '✔'; 
            position: absolute;
            font-size: 1.3rem;
            bottom: -5px;
            color: black;
        }
    }

    label {
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        cursor: pointer;
    }
`;
