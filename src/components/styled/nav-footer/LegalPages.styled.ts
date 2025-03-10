import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const LegalPagesStyled = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: end;
    width: 35%;
    align-items: center;
    font-size: 1.1rem;
    margin-right: 5%;
    margin-bottom: 1%;

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 90%;
    }
`

export const LegalPage = styled(Link)`
    text-decoration: none;
    color: black;
`
