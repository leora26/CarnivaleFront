import {styled} from "styled-components";

export const StoryCardStyled = styled.div`
    & h2{
        font-size: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 700;
        margin-bottom: 1rem;

    }
    
    & p {
        font-size: 1.4rem;
        width: 85%;
        font-family: "Lexend", sans-serif;
        font-weight: 400;        
        margin: 0;

    }
`

export const StoryCardImage = styled.img`
    width: 90%;
    border-radius: 2rem;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 90%;
    }
    
`