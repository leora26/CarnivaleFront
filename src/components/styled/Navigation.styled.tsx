import {styled} from "styled-components";

export const NavigationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 10vh;
    margin: 0 auto;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    
    @media (max-width: ${({theme}) => theme.display.tablet}) {
        width: 40%;
    }
`;

export const Logo = styled.img`
    width: 7%;

    @media (max-width: ${({theme}) => theme.display.tablet}) {
        width: 15%;
    }
`