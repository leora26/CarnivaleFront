import {styled} from "styled-components";
import {motion} from "framer-motion";

export const StoriesStyled = styled.main`
    width: 90%;
    margin: 15% auto 5% auto;
    display: flex;
    flex-direction: column;
    
    & h1{
        text-transform: uppercase;
        font-size: 6rem;
        margin: 0 0 2% 0;
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        width: 100%;
        border-bottom: 15px solid #FFDD5A;


        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 3rem;
            margin-top: 10%;
        }
    }
    
    & button {
        margin-top: 5%;
        align-self: center;
        padding: 10px 19px;
        border: 1px solid #000000;
        border-radius: 26px;
        display: flex;
        width: 10%;
        font-size: 1.2rem;
        background-color: #fff;
        font-family: "Lexend", sans-serif;
        font-weight: 500;
        align-items: center;
        
        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: 12%;    
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 14%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 17%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 2rem;
            width: 29%;
            border: 2px solid #000000;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 38%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 50%;
            margin-top: 10%;
            font-size: 1.2rem;
        }
        
        & svg {
            width: 20px;
            height: 20px;
            margin-left: 5%;

            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                width: 30px;
                height: 30px;
                margin-left: 7%;
            }

            @media (max-width: ${({theme}) => theme.display.mobile}) {
                width: 20px;
                height: 20px;
            }
        }

    }
`

export const StoriesNavigationStyled = styled.div`
    align-self: start;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    & .active {
        opacity: 1 !important;
    }
    
    & .storiesNavigation{
        opacity: 0.5;
        transition: 0.4s;
        
        &:hover {
            opacity: 1;
        }
        
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 1.2rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-top: 1rem;
            font-size: 2.6rem;
        }
    }

`

export const StoriesMobileNavigationStyled = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;


    & .storiesNavigation{
        opacity: 0.5;
        transition: 0.4s;
        margin-top: 1rem;
        font-size: 2.6rem;

        &:hover {
            opacity: 1;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
        }

    }

`