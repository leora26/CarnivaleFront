import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const NavigationItemStyled = styled(Link)`
    font-size: 1.2rem;
    color: ${({color}) => color};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primaryBold};
    font-family: ${({ theme }) => theme.fonts.secondaryBlack};
    margin-right: 1%;
    
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        font-size: 1rem;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        font-size: 1rem;
    }
    

`