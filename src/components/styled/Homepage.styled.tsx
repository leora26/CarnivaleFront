import {styled} from "styled-components";

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

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        margin-bottom: 0;
        height: ${(props) => props.tabletHorizontalSectionHeight || '80vh'};
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-bottom: 0;
        height: ${(props) => props.tabletVerticalSectionHeight || '40vh'};
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
    }

    & h2{
        width: 100% ;
        color: white;
        font-size: 8em;
        margin: 0 0 0 5%;
        align-self: flex-start;
    }

    & h3{
        color: white;
        font-size: 2em;
        margin: 0 0 0 6%;
        align-self: flex-start;
    }
`;