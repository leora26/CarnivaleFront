import {styled} from "styled-components";

export const SocialIconsStyled = styled.div`
    display: flex;
    flex-direction: row;
    width: 30%;
    list-style: none;
    margin-top: 2%;
    
    & li{
        width: 40%;
    }

    & a{
        margin-right: 10px;
        text-decoration: none;
        width: 100%;
        
        :first-child{
            color: black;
            width: 100%;
            height: 1.8rem;
        }
    }
    
`

