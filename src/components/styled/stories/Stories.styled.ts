import {styled} from "styled-components";

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
            width: 19%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 24%;
        }
        
        & svg {
            width: 20px;
            height: 20px;
            margin-left: 5%;
        }

    }
`

export const StoriesNavigation = styled.div`
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
    }
`

export const StoriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2%;

    & .storyCardV2 {
        width: 25%;
        margin-top: 10%;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 30%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 50%;
        }
        
    }
`