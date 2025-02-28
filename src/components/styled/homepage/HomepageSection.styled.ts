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

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: 60vh;

    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        height: 60vh;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-top: 30%;
        margin-left: 3rem;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        height: 35vh;
        margin: 18rem 0 15rem 0;
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
`