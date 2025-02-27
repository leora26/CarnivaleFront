import {styled} from "styled-components";

export const RegisterHeadingStyled = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;

    & img {
        width: 45%;
        height: auto;
        border-radius: 2rem;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            object-fit: cover;
            border-radius: 1rem;
        }
    }

    & #register-text {
        width: 45%;

        & h2 {
            font-family: "Lexend", sans-serif;
            font-weight: 500;
            font-size: 4rem;
            padding-bottom: 1rem;
            margin: 0;
            border-bottom: 10px solid #FFDD5A;
        }

        & p {
            font-family: "Lexend", sans-serif;
            font-weight: 300;
            font-size: 1.3rem;
            padding-top: 1rem;
        }
    }


`