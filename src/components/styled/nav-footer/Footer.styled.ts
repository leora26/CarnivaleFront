import {styled} from "styled-components";


export const FooterStyled = styled.footer`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Lexend", sans-serif;
`

export const SignUpSection = styled.section`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
    
    h2 {
        text-transform: uppercase;
        font-size: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
    
    p {
        width: 35%;
        text-align: center;
        font-family: "Lexend", sans-serif;
        font-weight: 300;
        font-size: 1.1rem;
    }
`

export const EmailInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 60%;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    
    input {
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 1rem;
        border: solid 1px black;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        margin-right: 1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 300;
        width: 50%;
    }
    
    .submitButton {
        border: 1px solid black;
        border-radius: 100%;
        width: 40px;
        height: 40px;
    }
`

export const MainFooterSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 90%;
    
    #secondSection{
        margin-left: 10%;
    }
`

export const MainSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    
    h3 {
        font-size: 2.4rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        margin-bottom: 0;
        width: 100%;
    }
    
    h4 {
        font-size: 1.6rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    p {
        font-size: 1.1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 300;
    }
    
    a {
        text-decoration: none;
        color: black;
        font-size: 1.2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 300;
        margin-top: 0.5rem;
    }
    
    span {
        font-size: 1.1rem;
        font-family: "Lexend", sans-serif;
        font-weight: 300;
        margin-bottom: 1rem;
    }
`

export const SocialMediaSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 10%;
    align-self: start;
    justify-content: space-between;
    margin-left: 5%;
    color: white;
`