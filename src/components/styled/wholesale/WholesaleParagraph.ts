import {styled} from "styled-components";

export const WholesaleParagraph = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    align-self: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
    
    .paragraphImage {
        width: 60%;
        border-radius: 1rem;
    }
    
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 35%;
    margin-top: 1rem;
    
    span {
        text-transform: uppercase;
        font-weight: bold;
        font-family:  ${({theme}) => theme.fonts.primary};
        font-size: 1.4rem;
    }
    
    p {
        font-family: "Lexend", sans-serif;
        font-size: 1.4rem;
        line-height: 1.6;
    }
    
    button {
        font-size: 1.4rem;
        border: none;
        background-color: transparent;
    }
`

export const ParagraphButton = styled.div`
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: auto;
    align-self: center;
    
    .paragraphLink {
        font-family: "Lexend", sans-serif;
        font-size: 1.4rem;
        text-decoration: none;
        color: black;
    }
    
    svg {
        transform: rotate(-45deg);
        width: 30px;
        height: 30px;
    }
`