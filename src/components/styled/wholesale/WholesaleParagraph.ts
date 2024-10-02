import {styled} from "styled-components";

export const WholesaleParagraph = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    width: 30%;
    font-size: 1.4rem;

    & span {
        background-color: #FFDD5A;
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