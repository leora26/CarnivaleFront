import {styled} from "styled-components";

export const WeWorkWithSectionStyled = styled.section`
    width: 100%;
    height: 80vh;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    margin-bottom: 5%;

    span {
        font-family: "Lexend", sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 2rem;
        color: black;
        margin-right: auto;
        margin-bottom: 1rem;


        @media (max-width: ${({theme}) => theme.display.mobile}) {
            display: none;
        }
    }

    .weWorkWithText {
        color: black;
        font-size: 8rem;
        text-transform: uppercase;
        text-align: start;
        margin-bottom: 2rem;
        font-family: ${({theme}) => theme.fonts.primarySemiBold};
        border-bottom: 3px solid black;
        width: 100%;
        margin-left: 0;
        padding-bottom: 1.8rem;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 4rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 3rem;
        }

    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        margin-bottom: 10%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 35vh;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        height: 45vh;
        margin-top: 10%;
    }

`

export const WeWorkWithHeading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid black;
    margin-bottom: 2rem;


    .headingText {
        color: black;
        font-size: 8rem;
        text-transform: uppercase;
        text-align: start;
        font-family: ${({theme}) => theme.fonts.primarySemiBold};
        margin-left: -5rem;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 4rem;
            margin-left: -3rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 3rem;
            margin-left: -2rem;
        }
    }

    button {
        transform: rotate(-45deg);

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-bottom: 1rem;
        }
    }

`