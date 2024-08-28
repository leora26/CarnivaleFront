import {styled} from "styled-components";

export const StoryCardStyled = styled.div`
    & h2 {
        font-size: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 700;
        margin-bottom: 1rem;

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 1.2rem;
            width: 90%;
        }
        

    }

    & p {
        font-size: 1.4rem;
        width: 85%;
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        margin: 0 0 2% 0;
        
        @media (max-width: ${({theme}) => theme.display.mobile}) {
            margin-bottom: 5rem;
            font-size: 0.8rem;
        }
    }
    
    
`

export const StoryCardImage = styled.img`
    width: 90%;
    border-radius: 2rem;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 90%;
    }
    
`

export const StoryCardFooter = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    & .createdAt {
        font-family: "Lexend", sans-serif;
        font-weight: 700;
        background-color: #FFDD5A;
    }
    
    & .storyType {
        padding: 6px 8px;
        border: 2px solid black;
        border-radius: 1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
`