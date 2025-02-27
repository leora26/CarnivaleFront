import {styled} from "styled-components";

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 60%;
    margin-top: 10%;
    margin-bottom: 10%;

    & section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        padding: 2rem 3rem 2rem 3rem;
        height: 80vh;

        #city-postal {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            
            :first-child {
                margin-right: 1rem;
            }
        }

        & span {
            font-family: "Lexend", sans-serif;
            font-weight: 600;
            font-size: 1.2em;
            margin: 5% 0 5%;
        }

        & h2 {
            margin: 0 auto 10% auto;
            font-size: 2.5rem;
            font-family: "Lexend", sans-serif;
            font-weight: 600;
        }

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            height: 90vh;
        }

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            height: 70vh;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            height: 80vh;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 50vh;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            height: 60vh;
        }
    }

    & #basic-info {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        border: 1px solid black;
        margin-right: 5px;
    }

    & #billing-info {
        background-color: #FFDD5A;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;

        & button {
            align-self: center;
            background-color: black;
            color: white;
            padding: 0.6rem 2rem;
            border-radius: 10px;
            width: 50%;
            margin-top: 20%;
            margin-bottom: -20%;
            font-size: 1.2rem;

            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                width: 50%
            }
        }
    }

    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 80%
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
    }
    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        width: 90%
    }
`