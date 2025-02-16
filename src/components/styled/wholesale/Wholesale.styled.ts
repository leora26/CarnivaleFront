import {styled} from "styled-components";

export const WholesaleStyled = styled.main`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 10% auto 0 auto;
    overflow: hidden;
    
    h3 {
        font-size: 4rem;
        margin: 0 0 1rem 0;
        align-self: center;
        font-family: ${({theme}) => theme.fonts.primaryBold};
        border-bottom: 10px solid ${({theme}) => theme.colors.primary};
        text-transform: uppercase;
    }
`