import {styled} from "styled-components";

export const HomepageStyled = styled.main`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    & h4{
        font-size: 5rem;
        margin-bottom: 2%;
        margin-top: 0;
        align-self: flex-end;
        font-family: ${({ theme }) => theme.fonts.primaryBold};
    }
    
    #first-section{
        margin-top: 10%;

        // @media (max-width: ${({theme}) => theme.display.laptop}) {
        //     margin-top: 2%;
        // }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-top: 20%;
        }
    }
`

export const BackPicture = styled.img`
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    z-index: 2;
`

export const BackVideo = styled.video`
    border-radius: 2rem;
    width: 90%;
    margin: 5% auto;
    display: flex;
    align-self: center;
`

export const ExploreArrow = styled.div`
    position: absolute;
    z-index: 4;
    bottom: 5%;
    right: -1%;
    width: 10rem;
    height: 10rem;
    display: flex;

    & #curvedTextV1 {
        width: 15rem;
        height: 15rem;
        margin-left: -7rem;
        margin-top: -5rem;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 10rem;
            height: 10rem;
            margin-left: -2rem;
            margin-top: -3rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 8rem;
            height: 8rem;
            margin-left: 0;
            margin-top: -1rem;
        }
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 8rem;
            height: 8rem;
            margin-left: 1rem;
            margin-top: 1rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 8rem;
            height: 8rem;
            margin-left: -0.5rem;
            margin-top: -2rem;
        }
    }

    & #heroSectionArrow {
        color: white;
        width: 8rem;
        height: 8rem;
        
        @media (max-width: ${({theme}) => theme.display.laptop}) {
            margin-right: -2rem;
            margin-bottom: 0;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            bottom: 40%;
            right: 35%;
            width: 6rem;
            height: 6rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 5rem;
            height: 5rem;
            bottom: 25%;
            right: 30%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            bottom: 15%;
            right: 30%;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 4rem;
            height: 4rem;
            bottom: 50%;
            right: 25%;
        }

    }

    // @media (max-width: ${({theme}) => theme.display.laptop}) {
    //     bottom: 8%;
    // }
    //
    // @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
    //     bottom: 0;
    // }
    //
    // @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
    //     bottom: -5%;
    // }
    //
    // @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
    //     bottom: 10%;
    // }

`





