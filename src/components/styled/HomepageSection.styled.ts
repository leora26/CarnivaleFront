import {styled} from "styled-components";

interface HomePageSectionStyledProps {
    sectionHeight?: string;
    tabletHorizontalSectionHeight?: string;
    tabletVerticalSectionHeight?: string;
    direction?: 'column' | 'row';
}


export const HomePageSectionStyled = styled.section<HomePageSectionStyledProps>`
    width: 100%;
    height: ${(props) => props.sectionHeight || '80vh'};
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: ${(props) => props.direction};
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;

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
            font-size: 7rem;
            width: 25%;
            height: 90%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 6rem;
            width: 25%;
            height: 90%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 7rem;
            width: 50%;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 4rem;
            width: 25%;
            height: 80%;
        }

    }

    & #workWithSpan {
        font-family: ${({theme}) => theme.fonts.secondaryRegular};
        text-transform: uppercase;
        font-size: 2rem;
        color: black;
        margin-right: auto;
        margin-bottom: 1rem;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.5rem;
        }
    }
    @media (max-width: ${({theme}) => theme.display.laptop}) {
        height: 100vh;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: ${(props) => props.tabletHorizontalSectionHeight || '70vh'};

    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-bottom: 10%;
        height: ${(props) => props.tabletVerticalSectionHeight || '40vh'};
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-bottom: 5%;
        height: 40vh;
    }
    
    & svg{
        border-radius: 2rem;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        
        & image{
            width: 100%;
            height: 100%;
        }
    }
    

    
`