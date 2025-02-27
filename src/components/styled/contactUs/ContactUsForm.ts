import {styled} from "styled-components";

export const ContactUsForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 20px;
    margin-left: -8%;
    
    h2 {
        align-self: center;
        font-size: 2rem;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
    }

    #full-name, #email {
        width: 60%;
    }
    
    #topic {
        width: 40%;
    }
    
    #message {
        width: 70%;
        margin-left: 5%;
    }
`


export const TextAreaButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    
    .submitButton {
        width: 60px;
        height: 60px;
        color: ${({theme}) => theme.colors.primary};
        background-color: black;
        border-radius: 100%;
        margin-bottom: 1rem;
        margin-right: 1rem;
    }
`