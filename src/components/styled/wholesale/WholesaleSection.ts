import {styled} from "styled-components";

export const WholesaleSection = styled.section`
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10%;
    
    #wholesaleFistSection{
        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            margin-top: 40%;
        }
        
    }
    

    

    & svg {
        position: absolute;
        z-index: 2;
        width: 90vw;
        height: 85vh;

        & image {
            width: 100%;
            height: 100%;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 95vw;
            height: 70vh;
        }
    }
    
    

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: 60vh;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 40vh;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        margin-bottom: 10%;
        height: 40vh;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        margin-top: 10%;
        margin-bottom: 30%;
    }
`