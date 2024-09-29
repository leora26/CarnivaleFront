import {styled} from "styled-components";
import {Link} from "react-router-dom";

interface NavigationItemProps {
    fontWeight: number;
    fontSize: string;
    fontSizeSmall: string;
}

export const NavigationItemStyled = styled(Link)<NavigationItemProps>`
    font-size: ${({fontSize}) => fontSize};
    color: ${({color}) => color};
    text-decoration: none;
    font-family: "Lexend", sans-serif;
    font-weight: ${({fontWeight}) => fontWeight};
    margin-right: 1%;
    


    @media (max-width: ${({theme}) => theme.display.mobile}) {
        font-size: ${({fontSizeSmall}) => fontSizeSmall};
    }
    
`