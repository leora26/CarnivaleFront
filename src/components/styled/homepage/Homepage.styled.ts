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
    
    #connectWithUs {
        width: 10rem;
        height: 10rem;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 10;
    }
    
`


export const GetInTouchContainer = styled.div`
    width: 100%;
    margin-bottom: 20vh;

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-bottom: 10vh;
    }
`






