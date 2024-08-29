import {styled} from "styled-components";
import {Link} from "react-router-dom";

export const AppLinkStyled = styled(Link)`
    width: 25vw;
    display: flex;
    margin-top: -23%;
    margin-left: 40%;
    text-decoration: none;

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        margin-left: 50%;
        margin-top: -25%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        margin-left: 40%;
        margin-top: -30%;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-left: 25%;
        margin-top: -30%;
    }


    #picture {
        display: flex;
        flex-direction: column;
        z-index: 1;
        align-items: center;

        & img {
            width: 19vw;
            height: auto;
            border-radius: 3rem;
            border: 10px solid white;
            
            @media (max-width: ${({theme}) => theme.display.laptop}) {
                width: 21vw;
            }

            @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
                width: 24vw;
            }

            @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
                width: 22vw;
            }
        }
        
        & p{
            width: 70%;
            font-family: ${({theme}) => theme.fonts.primary};
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            margin: -20% auto 0 40%;
            color: white;
            
            & :first-child{
                margin-left: 5%;
            }
            
            & .icon{
                width: 30px;
                height: 30px;

                @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
                    width: 20px;
                    height: 20px;
                }
            }

            @media (max-width: ${({theme}) => theme.display.laptop}) {
                margin-left: 30%;
            }
            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                font-size: 0.9rem;
            }

            @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
                margin-left: 20%;
            }
            
        }
        
        
    }

    #arrow-anchovies {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        margin-right: -10%;

        #appArrow {
            z-index: 20;
            margin-top: -120%;

            @media (max-width: ${({theme}) => theme.display.laptop}) {
                margin-top: -100%;
            }

            @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
                margin-top: -90%;
            }

        }

        #anchovies {
            width: 100%;
            z-index: 2;

            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                width: 80%;
            }

            @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
                width: 70%;
            }
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            margin-right: -15%;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            margin-right: -20%;
        }
    }

    #jar-pasta {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 0;
        margin-left: -5%;
        
        #pasta{
            margin-top: -50%;

            @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
                width: 140%;
            }
        }
        
       

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            margin-left: -15%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-left: -10%;
        }

    }


`