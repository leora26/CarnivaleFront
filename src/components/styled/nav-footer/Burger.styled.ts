import {styled} from "styled-components";

interface OpenProps {
    open: boolean;
}

export const BurgerStyled = styled.div<OpenProps>`
    width: 1.8rem;
    height: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 30;
    
    & div {
        width: 2rem;
        height: 0.2rem;
        border-radius: 10px;
        transition: all 0.3s ease;
        transform-origin: 2px;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
    
    
`

export const NavigationContainer = styled.div<OpenProps>`
    padding: 20% 5% 10% 5%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    height: 100vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    
    & a{
        margin-top: 10%;

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            font-size: 3rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
        }
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        padding: 10% 5% 10% 5%;
    }
`

