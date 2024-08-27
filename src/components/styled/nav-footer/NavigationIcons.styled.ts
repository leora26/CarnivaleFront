import {styled} from "styled-components";
import {Link} from "react-router-dom";

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

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        width: 80%;
        margin-left: 0;
        
        & .searchIcon{
            display: none;
        }
    }
`

export const NavigationIcon = styled(Link)`
    width: 10%;
`