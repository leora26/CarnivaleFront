import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const NavigationItemStyled = styled(Link)`
    font-size: 1rem;
    color: ${({color}) => color};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primaryFont};
    margin-bottom: 0.8rem;
    
`