import {styled} from "styled-components";

export const HomepageParagraph = styled.p`
    width: 30%;
    font-size: 1.4rem;
    font-family: "Lexend", sans-serif;
    font-weight: 300;

    & span {
        background-color: #FFDD5A;
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        font-size: 1.2rem;
    }

   

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-left: 5%;
        width: 90%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        font-size: 1rem;
        align-self: center;
    }

    
`