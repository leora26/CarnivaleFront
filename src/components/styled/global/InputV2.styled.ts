import {styled} from "styled-components";

interface InputProps {
    backgroundColor: string;
}

export const InputV2Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    align-self: center;
`

export const Input = styled.input<InputProps>`
    width: 100%;
    padding: 12px 0 12px 0;
    border-bottom: 1px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-bottom: 2rem;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    background-color: ${({backgroundColor}) => backgroundColor};
`