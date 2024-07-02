import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const NavigationItemStyled = styled(Link)`
    font-size: 0.8rem;
    text-transform: uppercase;
    color: black;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primaryFont};
`