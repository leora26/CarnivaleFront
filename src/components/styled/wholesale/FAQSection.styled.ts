import {styled} from "styled-components";

export const FAQSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const FAQCategories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    margin-top: 1rem;
`

interface FAQCategoryProps {
    isSelected: boolean;
}

export const FAQCategory = styled.div<FAQCategoryProps>`

    padding: 0.8rem;
    border-radius: 2rem;
    font-family: "Lexend", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    transition: 0.3s;
    background-color: ${({isSelected, theme}) => 
            isSelected ? theme.colors.primary : "none"};
    border: ${({isSelected}) =>
            isSelected ? "2px solid transparent" : "2px solid black"};

    &:hover {
        background-color: ${({theme}) => theme.colors.primary};
        border: 2px solid transparent;
    }

`

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 3rem 0;
`