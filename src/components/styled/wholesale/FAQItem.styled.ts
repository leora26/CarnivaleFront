import {styled} from "styled-components";

interface FAQItemProps {
    isOpen: boolean;
}

export const FAQItemStyled = styled.div<FAQItemProps>`
    display: flex;
    flex-direction: column;
    padding: ${({isOpen, theme}) =>
            isOpen ? "3rem" : "1rem"};
    border: 1px solid black;
    border-radius: 2rem;
    margin-top: 1rem;
    transition: 0.3s;
    background-color: ${({isOpen, theme}) => 
            isOpen ? theme.colors.primary : "transparent"};
    
    &:hover {
        background-color: ${({theme}) => theme.colors.primary};
    }
    
    p {
        font-size: 1.3rem;
        width: 95%;
        font-family: ${({theme}) => theme.fonts.primary};
    }
`

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    span {
        font-size: 1.2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 500;
    }
    
    svg {
        width: 35px;
        height: 35px;
    }
`
