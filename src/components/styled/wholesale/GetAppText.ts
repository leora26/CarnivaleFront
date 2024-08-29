import {styled} from "styled-components";

export const GetAppText = styled.p`
    white-space: nowrap;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-size: 3.7rem;
    width: 100%;
    text-align: center;
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    color: #FFDD5A;
    
    
    & span {
        margin: 0;
        color: black;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        font-size: 3.2rem;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        font-size: 3rem;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        font-size: 2.6rem;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        font-size: 2rem;
    }
`;