import {styled} from "styled-components";
import theme from "../theme";

const BannerStyled = styled.div`
    text-decoration: none;
    list-style: none;
    padding: 0.5rem 0 0.5rem 0;
    
    & span{
        margin-left: 0.5rem;
        font-family: ${({theme}) => theme.fonts.secondaryBold};
    }
`

export default BannerStyled;