import {styled} from "styled-components";
import {motion} from "framer-motion";

export const ChangingTextStyled = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 5%;
    align-items: center;
    
    
    & h5{
        text-transform: uppercase;
        font-size: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 500;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 1.6rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.6rem;
        }
        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 0.6rem;
        }

    }
    
    & p{
        text-transform: uppercase;
        font-size: 3rem;
        margin: 0 0 0 5%;
        font-family: "Lexend", sans-serif;
        font-weight: 500;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 2.5rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 2rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 1rem;
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
