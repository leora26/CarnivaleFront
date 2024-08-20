import {styled} from "styled-components";
import {Link} from "react-router-dom";

const CategoryCard = styled(Link)`
    width: 23%;
    height: 100%;
    text-decoration: none;
    
    & img{
            width: 90%;
            height: auto;
            border-radius: 1rem;
        
    }
    
    & h3{
        text-transform: uppercase;
        color: black;
        font-size: 2rem;
        margin-top: 1rem;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }
    
    & p{
        color: black;
        font-size: 1.8rem;
        font-family: ${({ theme }) => theme.fonts.primarySemiBold};
        width: 90%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: 30%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 25%;
    }

`

export default CategoryCard;