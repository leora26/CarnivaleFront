import {styled} from "styled-components";


export const LatestStoriesStyled = styled.section`
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5%;
    margin-left: 5%;
    align-self: center;
    
    @media (max-width: ${({theme}) => theme.display.mobile}) {
        flex-direction: column;
        
    }
`