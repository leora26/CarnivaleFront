import {styled} from "styled-components";
import {Link} from "react-router-dom";

interface NavigationItemProps {
    fontWeight: number
}

export const NavigationItemStyled = styled(Link)<NavigationItemProps>`
    font-size: 1.2rem;
    color: ${({color}) => color};
    text-decoration: none;
    font-family: "Lexend", sans-serif;
    font-weight: ${({fontWeight}) => fontWeight};
    margin-right: 1%;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        font-size: 1rem;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        font-size: 1rem;
    }
    

`