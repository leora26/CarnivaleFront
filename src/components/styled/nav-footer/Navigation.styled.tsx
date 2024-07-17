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
    
`

export const NavigationContainer = styled.div<NavigationStyledProperties>`
    background-color: white;
    position: fixed;
    top: ${({ visible }) => (visible ? '0' : '-10vh')}; /* Adjust position based on visibility */
    left: 0;
    right: 0;
    z-index: 1000;
    transition: top 0.3s ease-in-out; /* Smooth transition effect */
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
`;

export const Logo = styled.img`
    width: 7%;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 15%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        margin-left: 10%;
    }
`