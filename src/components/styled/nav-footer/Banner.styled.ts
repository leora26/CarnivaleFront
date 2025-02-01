import {styled} from "styled-components";

const BannerStyled = styled.div`
    text-decoration: none;
    list-style: none;
    display: flex;

    & p{
        margin: 0;
        align-self: center;
        font-family: "Lexend", sans-serif;
        font-weight: 600;
        word-spacing: 0.3rem;
    }
`

export default BannerStyled;