import {styled} from "styled-components";

export const InputV1Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;
    align-self: center;
`

export const Input = styled.input`
    width: 100%;
    padding: 0.4rem 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    background-color: transparent;
`

export const Label = styled.label`
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 1.2rem;
`