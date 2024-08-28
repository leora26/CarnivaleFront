import {styled} from "styled-components";

export const ProductCardStyled = styled.div`
    padding: 2rem;
    margin-left: 2%;
    border: 1px solid #bebebe;
    border-radius: 2rem;


    & img{
        border-radius: 1.5rem;
        
        
        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 12rem;
        }
    }
    
    & h3{
        margin: 5% 0 0 0 ;
        text-transform: uppercase;
        font-family: "Lexend", sans-serif;
        font-weight: 400;
    }
    
    & span {
        font-family: "Lexend", sans-serif;
        font-weight: 300;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        border-radius: 1rem;
        
    }
    
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 5%;

    & h4{
      font-size: 1.5rem;
        margin: 0 0 5% 0;
    }
    
    & button{
        padding: 0;
        margin: 0;
        width: 60px;
        height: 60px;
        
        & .iconProductCard{
            width: 40px;
            height: 40px;
            border: 1px solid black;
            border-radius: 100%;
            padding: 10px;
        }

        &:hover .iconProductCard {
            color: white;
        }
    }
`