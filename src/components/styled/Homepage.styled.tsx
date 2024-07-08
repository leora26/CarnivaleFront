import {styled} from "styled-components";
import {Link} from "react-router-dom";
import theme from "./theme";

export const HomepageStyled = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    & h4{
        font-size: 5rem;
        margin: 0 5% 2% 0;
        align-self: flex-end;
        font-family: ${({ theme }) => theme.fonts.primaryBold};


    }
`

export const BackPicture = styled.img`
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    z-index: 1;
`

interface HomePageSectionStyledProps {
    sectionHeight?: string;
    tabletHorizontalSectionHeight?: string;
    tabletVerticalSectionHeight?: string
}

export const HomePageSectionStyled = styled.section<HomePageSectionStyledProps>`
    width: 100%;
    height: ${(props) => props.sectionHeight || '100vh'};
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
    
    & span{
        font-family: ${({ theme }) => theme.fonts.secondaryBlack};
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
`

export const WorkWithLink = styled(Link)`
    color: black;
    font-size: 8rem;
    text-transform: uppercase;
    border-bottom: 3px solid black;
    width: 100%;
    text-align: start;
    text-decoration: none;
    padding-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.primarySemiBold};
    
    &:hover{
        color: white;
        background-color: #000;
        transition: 0.5s;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        font-size: 5rem;
    }
`

export const TextOverlay = styled.div`
    z-index: 2;
    position: relative;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    & h1{
        color: white;
        font-size: 8em;
        letter-spacing: 1.5rem;
        margin: 0;
        align-self: center;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: lighter;


        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 6em;        
        }
    }
    
    & p{
        color: white;
        width: 20%;
        align-self: center;
        margin-left: 32%;
        font-size: 1.2rem;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 30%;
        }
    }
    
    & span {
        width: 70%;
        color: white;
        font-size: 2em;
        letter-spacing: 0.1rem;
        text-align: center;
        align-self: center;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;
    }

    & h2{
        width: 100% ;
        color: white;
        font-size: 8em;
        margin: 0 0 0 5%;
        align-self: flex-start;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }

    & h3{
        color: white;
        font-size: 2em;
        margin: 0 0 0 6%;
        align-self: flex-start;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;
    }
`;