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
    z-index: 1;
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
    z-index: 2;
    bottom: 0;
    right: 0;
    display: flex;

    & :first-child {
        margin-right: -8rem;
        margin-top: -3rem;

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            margin-right: -8rem;
            margin-top: -3rem;
        }
    }

    & :last-child {
        color: white;
        width: 8rem;
        height: 8rem;
        margin-right: -2rem;
        margin-bottom: -1.8rem;

        border: 2.5rem solid white;
        border-radius: 50%;
        
        @media (max-width: ${({theme}) => theme.display.laptop}) {
            margin-right: -2rem;
            margin-bottom: 0;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            border: 2rem solid white;
            margin-right: -2rem;
            margin-bottom: -1rem;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 6rem;
            height: 6rem;
            border: 2rem solid white;
            margin-right: -2rem;
        }


        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            width: 4rem;
            height: 4rem;
            border: 1.8rem solid white;
            margin-right: -1rem;
            margin-bottom: -2rem;
        }

    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        bottom: 8%;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        bottom: 0;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        bottom: -5%;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        bottom: 10%;
    }

`





