import {styled} from "styled-components";

export const LoginStyled = styled.div`
    width: 90%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 10% auto 10% auto;

    & img {
        width: 50%;

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 45%;

        }
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
       
    }
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
    
    }
    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 40vh;
        margin: 25% auto 20% auto;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        height: 45vh;
        margin: 25% auto 13% auto;
    }

`

export const LoginForm = styled.form`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #c3c3c3;
    border-radius: 1.2rem;
    align-items: center;


    & #login-heading {
        text-transform: uppercase;
        font-size: 3rem;
        margin: 10% 0 5% 0;
        font-family: ${({ theme }) => theme.fonts.primarySemiBold};
    }
    
    & #register-link {
        margin-bottom: 1rem;
        
        & :first-child{
            border-bottom: 2px solid #FFDD5A;
            text-decoration: none;
            color: black;
            font-family: "Lexend", sans-serif;
            font-weight: 400;
        }
    }

    & button {
        margin-top: 15%;
        width: 90%;
        padding: 0.7rem 0 0.7rem 0;
        gap: 6px;
        background: #000000;
        border: 1px solid #000000;
        border-radius: 0.7rem;
        color: white;
        font-size: 1.5rem;
        font-family: "Lexend", sans-serif;
        font-weight: 400;
    }
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: 80%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 40%;
    }
    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        width: 50%;
    }
`

export const LoginActions = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    align-self: center;
    justify-content: space-between;
    
    & span {
        border-bottom: 2px solid #FFDD5A;
        
        & :first-child{
            text-decoration: none;
            color: black;
            font-family: "Lexend", sans-serif;
            font-weight: 400;
        }
    }
`