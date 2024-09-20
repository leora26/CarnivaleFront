import {styled} from "styled-components";

export const WholesaleParagraph = styled.p`
    font-family: ${({theme}) => theme.fonts.primary};
    width: 30%;
    font-size: 1.4rem;

    & span {
        background-color: #FFDD5A;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        font-size: 1.2rem;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        font-size: 1rem;
        width: 33%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        font-size: 1rem;
        width: 90%;
        align-self: center;
    }

    
`