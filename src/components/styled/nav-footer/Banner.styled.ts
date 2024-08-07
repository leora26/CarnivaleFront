import {styled} from "styled-components";

const BannerStyled = styled.div`
    text-decoration: none;
    list-style: none;
    display: flex;

    & span{
        margin: 0.5rem 0.5rem 0 0.5rem;
        align-self: center;
        font-family: "Lexend", sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
    }

    & p{
        margin: 0;
        align-self: center;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
    }
`

export default BannerStyled;