import {styled} from "styled-components";

export const AssortmentStyled = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20%;

    & .assortmentSectionIconButton:hover {
        background-color: black;
    }
    
    & #becomeClient{
        background-color: #FFDD5A;
        color: black;
        border: none;
        width: 15%;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 1.6rem;
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        border-radius: 0.5rem;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 20%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 25%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 60%;
            font-size: 1.2rem;
            margin-top: 5%;
        }
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        margin-top: 5%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        margin-top: 10%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin: 0;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        margin: 0;
        height: 50vh;
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


        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
        }
    }
`

export const ButtonContainer = styled.div`
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 12%;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        width: 15%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
       display: none;
    }

`