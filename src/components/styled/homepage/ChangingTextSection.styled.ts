import {styled} from "styled-components";
import {motion} from "framer-motion";

export const ChangingTextSectionStyled = styled.section`
    width: 100%;
    height: 80vh;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 40vh;
        margin-top: 5%;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-top: 10%;
    }
`

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

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 1.8rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 1.6rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 1.4rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 1rem;
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
        color: black;
        width: fit-content;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 2.8rem;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 2.5rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 2.2rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;

    & .tabletSVGs {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            display: none;
        }
        

        & image {
            width: 100%;
            height: 100%;
        }
    }
    
    #yellowContainer {
        display: none;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 100%;
            height: 40vh;
            border-radius: 2rem;
            display: block;
            position: absolute;
            background-color: ${({theme}) => theme.colors.primary};
        }
    }
    
`