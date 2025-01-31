import {styled} from "styled-components";
import {motion} from "framer-motion";

interface HomePageSectionStyledProps {
    tabletHorizontalSectionHeight?: string;
    tabletVerticalSectionHeight?: string;
    direction?: 'column' | 'row';
}


export const HomePageSectionStyled = styled(motion.section)<HomePageSectionStyledProps>`
    width: 100%;
    height: 80vh;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

    & #categories {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

    }

    & #workWithSpan {
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 2rem;
        color: black;
        margin-right: auto;
        margin-bottom: 1rem;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.5rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            display: none;
        }
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        height: 100vh;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: ${(props) => props.tabletHorizontalSectionHeight || '70vh'};

    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-bottom: 30%;
        height: 60vh;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        height: 40vh;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        margin-bottom: 30%;
    }


    & .tabletSVGs {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 95vw;
            height: 90vh;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 95vw;
            height: 70vh;
        }

        & image {
            width: 100%;
            height: 100%;
        }
    }



`

export const HeroSection = styled.a`
    width: 100%;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;


    & .tabletSVGs {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 95vw;
            height: 90vh;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 95vw;
            height: 70vh;
        }

        & image {
            width: 100%;
            height: 100%;
        }
    }
    }
`

export const TextSection = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;
`