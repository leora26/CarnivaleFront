import {styled} from "styled-components";

export const StoriesMenuHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-top: 2%;
    
    & h4{
        margin: 0;
        font-size: 3rem;
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        text-transform: uppercase;

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
        }
    }
    
    & svg {
        width: 60px;
        height: 60px;

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 40px;
            height: 40px;
        }
    }
`