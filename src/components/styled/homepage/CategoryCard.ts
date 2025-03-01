import {styled} from "styled-components";
import {Link} from "react-router-dom";

const CategoryCard = styled(Link)`
    width: 35%;
    height: 100%;
    text-decoration: none;

    & img {
        width: 90%;
        height: auto;
        border-radius: 1rem;
        
        
        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 120%;
            height: 70%;
        }

    }

    & h3 {
        text-transform: uppercase;
        color: black;
        font-size: 2rem;
        margin-top: 1rem;
        font-family: ${({theme}) => theme.fonts.primaryBold};

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 1.2rem;
        }
    }

    & p {
        color: black;
        font-size: 1.8rem;
        font-family: ${({theme}) => theme.fonts.primarySemiBold};
        width: 90%;

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 0.8rem;
        }
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 30%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 35%;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        width: 25%;
    }

`

export default CategoryCard;