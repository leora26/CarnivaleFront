import {styled} from "styled-components";
import {motion} from "framer-motion";

export const HeroSection = styled.a`
    width: 100%;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    height: 80vh;
    margin-top: 5%;

    &:hover {
        & * {
            color: #FFDD5A;
        }
    }

    & .tabletSVGs {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;

        & image {
            width: 100%;
            height: 100%;
            
            
        }
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: 60vh;

    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        height: 60vh;
    }

`

export const TextSection = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 95%;
        margin-top: 5%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        flex-direction: column;
        height: 35vh;
    }
`