import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const NavigationIconsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10%;
    margin-left: auto;
`

export const NavigationIcon = styled(Link)`
    width: 10%;

    & img {

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 2rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 1rem;
        }

    }
`