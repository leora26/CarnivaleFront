import {styled} from "styled-components";


export const CompanyPageStyled = styled.main`
    
    & :first-child{
        margin-top: 5%;
        
        & svg{ 
            image {
                filter: brightness(0.7);
            }
        }
    }
    
    & :nth-child(2){
        height: 60vh;
    }
`