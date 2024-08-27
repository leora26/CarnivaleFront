import {styled} from "styled-components";

interface NavigationStyledProperties {
    visible: boolean;
}

export const NavigationStyled = styled.div<NavigationStyledProperties>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 10vh;
    margin: 0 auto;

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        width: 80%;
    }
    
`

export const NavigationContainer = styled.div<NavigationStyledProperties>`
    background-color: white;
    position: fixed;
    top: ${({ visible }) => (visible ? '0' : '-15vh')};
    left: 0;
    right: 0;
    z-index: 1000;
    transition: top 0.3s ease-in-out;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 40%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 50%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        width: 20%;
    }
`;


export const Logo = styled.img`
    width: 7%;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 15%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-left: 10%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        margin: 0;
        width: 30%;
    }
`