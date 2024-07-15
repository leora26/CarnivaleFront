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
        height: 100%;
        margin:  0 8%  8% 0;
        text-transform: uppercase;
        letter-spacing: -2px;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 5rem;
            width: 25%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 4rem;
            width: 25%;
        }
    }
    
    & #workWithSpan{
        font-family: ${({ theme }) => theme.fonts.secondaryRegular};
        //font-family: "Lexend", sans-serif;
        text-transform: uppercase;
        font-size: 2rem;
        color: black;
        margin-right: auto;
        margin-bottom: 1rem;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.5rem;
        }
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        margin-bottom: 0;
        height: ${(props) => props.tabletHorizontalSectionHeight || '80vh'};
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-bottom: 0;
        height: ${(props) => props.tabletVerticalSectionHeight || '40vh'};
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        height: 100vh;
    }
`