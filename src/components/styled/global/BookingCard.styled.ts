import {styled} from "styled-components";



export const BookingCardStyled = styled.div`
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;

    & a {
        width: 100%;
    }

    & h2 {
        z-index: 2;
        align-self: center;
        position: absolute;
        width: 90%;
        top: 55%;
        color: white;
        left: 10%;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        font-size: 2.4rem;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 2rem;
            left: 5%;
        }
        
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 1.6rem;
            left: 5%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 1.4rem;
            top: 54%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 1rem;
            top: 54%;
        }
    }
    
    & svg{
        width: 100%;
    }


    & image {
        filter: brightness(0.8);
    }
`