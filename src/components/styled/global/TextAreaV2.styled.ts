import {styled} from "styled-components";

export const TextAreaV2Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    
    label {
        width: 100%;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
    
    textarea {
        width: 100%;
        height: 10rem;
        background-color: transparent;
        resize: none;
        border: 1px solid black;
        padding: 0.5rem;
        border-radius: 1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`