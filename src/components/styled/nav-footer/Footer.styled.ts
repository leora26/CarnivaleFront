import {styled} from "styled-components";


export const FooterStyled = styled.footer`
    background-color: #FFDD5A;
    padding: 2rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;


    & h1 {
        color: black;
        font-size: 16em;
        letter-spacing: 2rem;
        margin: 3% 0 0 3%;
        width: 95%;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
        font-weight: bold;
        
        @media (max-width: ${({ theme }) => theme.display.laptop}) {
            font-size: 12em;
        }
        @media (max-width: ${({ theme }) => theme.display.tabletHorizontal}) {
            font-size: 10em;
        }
        @media (max-width: ${({ theme }) => theme.display.smallTabletHorizontal}) {
            font-size: 8em;
        }
        @media (max-width: ${({ theme }) => theme.display.tabletVertical}) {
            font-size: 7rem;
        }
        @media (max-width: ${({ theme }) => theme.display.smallTabletVertical}) {
            font-size: 5rem;
        }

        @media (max-width: ${({ theme }) => theme.display.mobile}) {
            margin-top: 10%;
            font-size: 2.2rem;
            letter-spacing: 12px;
        }

        
    }

    @media (max-width: ${({ theme }) => theme.display.mobile}) {
        margin-top: 40%;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.display.mobile}) {
        flex-direction: column;
    }
    
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 80%;

    & input {
        border: 2px solid black;
        border-radius: 19px;
        background-color: #FFDD5A;
        padding: 0.7rem;
        width: 90%;
        color: black;
        font-family: ${({theme}) => theme.fonts.secondaryBlack};

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 100%;
        }
    }

    & button {
        background-color: #FFDD5A;
        border: none;
        padding: 0;
        width: 30%;
        height: auto;

        :first-child {
            color: black;
            width: 45%;
            height: 2.5rem;
            border-radius: 360px;
            border: 2px solid black;
            margin-top: 5px;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 50%;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 90%;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 100%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 45%;
        }
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        width: 100%;
    }
`

export const FooterNavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
    align-items: center;

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 40%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        margin-top: 10%;
        width: 100%;
    }
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
    margin-left: 5%;
    
    & label{
        color: black;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }

    @media (max-width: ${({ theme }) => theme.display.mobile}) {
        width: 100%;
    }
`

export const FooterNavigation = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20%;
    
    & span {
        font-size: 1.2rem;
        color: black;
        margin-bottom: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
    
    & .footerNivItem{
        margin-top: 5%;
    }
    
`

export const ParagraphStyled = styled.p`
    color: black;
    font-size: 0.6rem;
    font-family: "Lexend", sans-serif;
    font-weight: 300;    
    margin-right: 1%;
`

export const PrivacyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;;
    align-items: center;
    margin-left: 5%;
    
`