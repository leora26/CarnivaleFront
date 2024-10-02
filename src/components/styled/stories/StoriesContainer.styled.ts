import {styled} from "styled-components";

export const StoriesContainerStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2%;

    & .storyCardV2 {
        width: 25%;
        margin-top: 10%;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 30%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 50%;
        }
        
    }
`