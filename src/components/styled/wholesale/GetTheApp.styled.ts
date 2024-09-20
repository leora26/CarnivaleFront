import {styled} from "styled-components";

export const GetTheAppStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    height: 70vh;
    overflow-x: hidden;
    margin: 5% 0 10% 0;
    
    & #picture{
        margin-top: -20%; 
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        height: 80vh;
    }
    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        margin: 0;
        height: 60vh;
    }
    

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 35vh;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
        margin-bottom: 0;        
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        height: 40vh;
    }
    
`;