import {styled} from "styled-components";

interface TextAreaV1StyledProps {
    backgroundColor: string;
}

export const TextAreaV1Styled = styled.textarea<TextAreaV1StyledProps>`
    width: 85%;
    height: 12rem;
    background-color: ${({backgroundColor}) => backgroundColor};
    align-self: center;
    resize: none;
    border: 2px solid black;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
`