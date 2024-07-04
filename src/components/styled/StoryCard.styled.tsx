import {styled} from "styled-components";

export const StoryCardStyled = styled.div`
    & h2{
        font-size: 2rem;
    }
    
    & p {
        font-size: 1.2rem;
        width: 90%;
    }
`

export const StoryCardImage = styled.img`
    width: 100%;
    border-radius: 2rem;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 90%;
    }
    
`