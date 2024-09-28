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

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            font-size: 2rem;
            margin-top: 20%;
            margin-bottom: 1rem;
        }
    }
    
    #weWorkWithContainer{
        transform: rotate(90deg);
        transform-origin: center;
        margin: 0 3rem 0 0 ;
    }
    
    .first-section{
        margin-top: 10%;
        height: 80vh;
        
        &:hover{
            & *{
                color: #FFDD5A;
            }
        }

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            height: 60vh;

        }

        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            height: 60vh;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-top: 30%;
            margin-left: 3rem;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            height: 35vh;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            height: 35vh;
            margin: 18rem 0 15rem 0;
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

    & :first-child {
        width: 15rem;
        height: 15rem;
        margin-left: -7rem;
        margin-top: -5rem;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            margin-top: -3rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 10rem;
            height: 10rem;
            margin-left: -2rem;
            margin-top: -3rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 10rem;
            height: 10rem;
            margin-left: -1rem;
            margin-top: -1rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 8rem;
            height: 8rem;
            margin-left: -1rem;
            margin-top: -1rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 8rem;
            height: 8rem;
            margin-left: 1rem;
            margin-top: 0;
        }
    }

    & #wholesaleArrow{
        transform: rotate(90deg);
        transform-origin: center;
        color: white;
        width: 8rem;
        height: 8rem;
        right: 25%;
        bottom: 20%;
        
        @media (max-width: ${({theme}) => theme.display.laptop}) {
            right: 10%;
            bottom: 0;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            bottom: 40%;
            right: 15%;
            width: 6rem;
            height: 6rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 5rem;
            height: 5rem;
            bottom: 25%;
            right: 15%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            bottom: 50%;
            right: 10%;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 4rem;
            height: 4rem;
            bottom: 45%;
            right: 5%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 4rem;
            height: 4rem;
        }
    }

    & #heroSectionArrow {
        color: white;
        width: 8rem;
        height: 8rem;
        
        @media (max-width: ${({theme}) => theme.display.laptop}) {
            right: 10%;
            bottom: 0;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            bottom: 40%;
            right: 15%;
            width: 6rem;
            height: 6rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 5rem;
            height: 5rem;
            bottom: 25%;
            right: 15%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            bottom: 35%;
            right: 10%;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: 4rem;
            height: 4rem;
            bottom: 35%;
            right: 5%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 4rem;
            height: 4rem;
        }

    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        top: 108%;
        right: -2%;
    }
`

export const GetInTouchContainer = styled.div`
    width: 100%;
    margin-bottom: 20vh;

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-bottom: 10vh;
    }
`





