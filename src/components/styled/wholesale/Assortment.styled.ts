import {styled} from "styled-components";

export const AssortmentStyled = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    & .assortmentSectionIconButton:hover {
        background-color: black;
    }
`

export const AssortmentHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    
    & h2 {
        text-transform: uppercase;
        font-size: 4rem;
    }
`

export const ButtonContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`