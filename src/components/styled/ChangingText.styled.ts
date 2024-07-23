import {styled} from "styled-components";
import theme from "./theme";

export const ChangingTextStyled = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    align-items: center;

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        width: 60%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 60%;

    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 70%;

    }
    
    & h5{
        text-transform: uppercase;
        font-size: 1.5rem;
        font-family: ${({theme}) => theme.fonts.secondaryMedium};

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 1.2rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1rem;
        }

        // @media (max-width: ${({theme}) => theme.display.laptop}) {
        //     font-size: 7rem;
        // }
    }
    
    & p{
        text-transform: uppercase;
        font-size: 3rem;
        margin: 0 0 0 5%;
        font-family: ${({theme}) => theme.fonts.secondaryMedium};

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 2.5rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.5rem;
        }
    }
`

export const ChangingTextContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFDD5A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;
`
