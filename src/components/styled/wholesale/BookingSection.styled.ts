import {styled} from "styled-components";


export const BookingSectionStyled = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
    
    h1 {
        font-size: 5rem;
        text-align: center;
        margin-bottom: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        margin-top: 0;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            margin: 0;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 3.5rem;
            margin-bottom: -10%;
        }
    }
    
    .bookingCard{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%;

        // @media (max-width: ${({theme}) => theme.display.laptop}) {
        //     width: 30%;
        // }
    }
    
    .bookings{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: 40vh;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        height: 50vh;
    }
`

