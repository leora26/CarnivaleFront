import {styled} from "styled-components";


export const FooterStyled = styled.footer`
    background-color: black;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;


    & h1{
        color: white;
        font-size: 12rem;
        letter-spacing: 2rem;
        margin: 0 auto;
        width: 80%;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`