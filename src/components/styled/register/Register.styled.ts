import {styled} from "styled-components";

export const RegisterStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & #register-heading-section {
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10%;

        & img {
            width: 45%;
            height: auto;

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
                font-size: 2rem;
                padding-bottom: 1rem;
                border-bottom: 5px solid #FFDD5A;
            }

            & p {
                font-family: "Lexend", sans-serif;
                font-weight: 300;
                font-size: 1.3rem;
                padding-top: 1rem;
            }
        }

    }
        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            margin-top: 10%;
        }
`