import {styled} from "styled-components";


export const FooterStyled = styled.footer`
    background-color: #FFDD5A;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;


    & h1{
        color: black;
        font-size: 12em;
        letter-spacing: 2rem;
        margin: 0 auto;
        width: 75%;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
        font-weight: bold;


        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            font-size: 8em;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 6rem;
        }
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
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
        padding: 0.5rem;
        width: 90%;
        color: black;
        font-family: ${({ theme }) => theme.fonts.secondaryBlack};
    }

    & button {
        background-color: #FFDD5A;
        border: none;
        padding: 0;
        width: 30%;
        height: auto;

        :first-child{
            color: black;
            width: 100%;
            height: 2.5rem;
        }
    }
`

export const FooterNavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20%;
    align-items: center;
`

export const FooterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
    
    & label{
        color: black;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-family: ${({ theme }) => theme.fonts.secondaryBold};
        font-weight: bolder;
    }
`

export const FooterNavigation = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    
    & span {
        font-size: 1.2rem;
        color: black;
        margin-bottom: 2rem;
        font-family: ${({ theme }) => theme.fonts.secondaryBold};
    }
    
`

export const ParagraphStyled = styled.p`
    color: black;
    font-size: 1rem;
    margin-bottom: 1.8rem;
    font-family: ${({ theme }) => theme.fonts.secondaryBlack};
    font-weight: bold;
`

export const PrivacyContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 60%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 80%;
    }
`