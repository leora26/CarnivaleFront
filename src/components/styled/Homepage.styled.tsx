import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const HomepageStyled = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    & h4{
        font-size: 5rem;
        margin-bottom: 2% ;
        align-self: flex-end;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }
    
    #first-section{
        margin-top: 10%;
    }
`

export const BackPicture = styled.img`
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    z-index: 1;
`

export const BackVideo = styled.video`
    border-radius: 2rem;
    width: 90%;
    margin: 5% auto;
    display: flex;
    align-self: center;
`


export const WorkWithLink = styled(Link)`
    color: black;
    font-size: 8rem;
    text-transform: uppercase;
    border-bottom: 3px solid black;
    width: 100%;
    text-align: start;
    text-decoration: none;
    padding-bottom: 1.8rem;
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.fonts.primarySemiBold};

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
        margin-top: 0;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fonts.secondaryLight};
        font-weight: lighter;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 30%;
        }
    }
    
    & span {
        width: 50%;
        color: white;
        font-size: 2em;
        letter-spacing: 0.1rem;
        text-align: center;
        align-self: center;
        font-family: ${({ theme }) => theme.fonts.secondaryRegular};
        font-weight: lighter;
        margin: 0 auto;
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



