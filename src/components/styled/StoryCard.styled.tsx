import {styled} from "styled-components";

export const StoryCardStyled = styled.div`
    & h2{
        font-size: 2rem;
        font-family: ${({ theme }) => theme.fonts.secondaryBold};

    }
    
    & p {
        font-size: 1.2rem;
        width: 90%;
        font-family: ${({ theme }) => theme.fonts.secondaryBlack};

    }
`

export const StoryCardImage = styled.img`
    width: 100%;
    border-radius: 2rem;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 90%;
    }
    
`