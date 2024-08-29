import {styled} from "styled-components";

export const WholesaleStyled = styled.main`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 10% auto 0 auto;
    overflow: hidden;
    
    #contactUsSection{
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 25vh;
        }
        
    }
    
    & #paragraphs{
        flex-direction: row;
        height: 10vh;
        margin: -10% auto 10% auto;
        justify-content: space-around;
        align-items: start;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            margin-bottom: 15%;
        }
        
        & svg {
            width: 10%;
            height: auto;
            margin-top: 5%;
            margin-left: 80%;

            @media (max-width: ${({theme}) => theme.display.laptop}) {
                margin-top: 9%;
            }

            @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
                margin-top: 12%;
            }

            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                margin-top: 15%;
            }
        }
    }
`