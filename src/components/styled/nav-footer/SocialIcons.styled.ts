import {styled} from "styled-components";

export const SocialIconsStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 10%;
    list-style: none;
    margin-top: 2%;
    margin-left: 5%;
    align-self: start;
    
    & li{
        width: 40%;
    }

    & a{
        text-decoration: none;
        width: 100%;
        
        :first-child{
            color: black;
            width: 40px;
            height: 40px;
        }
    }
    
`

