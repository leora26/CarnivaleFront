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
    }
    
    & svg {
        width: 60px;
        height: 60px;
    }
`