import {styled} from "styled-components";

interface HomePageSectionStyledProps {
    tabletHorizontalSectionHeight?: string;
    tabletVerticalSectionHeight?: string;
    direction?: 'column' | 'row';
}


export const HomePageSectionStyled = styled.section<HomePageSectionStyledProps>`
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

    & #whatDoWeHave {
        font-size: 8rem;
        width: 20%;
        height: 95%;
        margin: 0 8% 8% 0;
        text-transform: uppercase;
        letter-spacing: -2px;
        border-bottom: 1rem solid #FFDD5A;


        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 7rem;
            width: 25%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            height: 90%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 6rem;
            height: 90%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 5rem;
            height: 90%;
            width: 25%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 4rem;
            width: 25%;
            height: 80%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
            width: 90%;
            height: auto;
            border-bottom: 6px solid #FFDD5A;
        }

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


    & svg {
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

    & #boxesPicture {
        width: 100vw;
        height: 80vh;

       
     
    }



`