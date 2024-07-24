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
        margin-bottom: 2%;
        margin-top: 0;
        align-self: flex-end;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }
    
    #first-section{
        margin-top: 10%;

        // @media (max-width: ${({theme}) => theme.display.laptop}) {
        //     margin-top: 2%;
        // }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-top: 20%;
        }
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





