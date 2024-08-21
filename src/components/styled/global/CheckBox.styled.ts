import {styled} from "styled-components";

export const CheckBoxStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & input[type="checkbox"]{
        margin-right: 10px;
        color: #c3c3c3;
    }
    
    & label {
        font-family: "Lexend", sans-serif;
        font-weight: 300;
    }
`