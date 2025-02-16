import {styled} from "styled-components";

export const BecomeCustomerSectionStyled = styled.section`
    width: 90%;
    align-self: center;
    display: flex;
    flex-direction: column;
    
    padding: 4rem;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 2rem;

    margin-bottom: 5rem;
    
    button {
        width: 20%;
        padding: 0.5rem 1rem;
        align-self: end;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 1.2rem;
        cursor: pointer;
    }
    
    h4 {
        font-size: 3rem;
        margin: 0;
        text-transform: uppercase;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
    
    p {
        font-family: "Lexend", sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
        width: 80%;
    }
`