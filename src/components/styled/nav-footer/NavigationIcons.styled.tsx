import {styled} from "styled-components";

export const NavigationIconsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-left: auto;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 40%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 40%;
    }
`

export const NavigationIcon = styled.img`
    width: 10%;
`