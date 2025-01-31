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
    
    #weWorkWithSection{
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 40vh;
            margin: 10% 0 10% 0;
        }
    }
    
    #changingTextSection{

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 40vh;
        }
    }
    
    #whatDoWeHaveSection{
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            height: 40vh;
            margin: 0;
        }
    }
    
    #firstSection{
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

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            height: 35vh;
            margin: 18rem 0 15rem 0;
        }
    }
    
    #connectWithUs {
        width: 10rem;
        height: 10rem;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 10;
    }
    
`

export const BackPicture = styled.img`
    border-radius: 2rem;
    width: 100%;
    position: absolute;
    z-index: 2;
`


export const GetInTouchContainer = styled.div`
    width: 100%;
    margin-bottom: 20vh;

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-bottom: 10vh;
    }
`






