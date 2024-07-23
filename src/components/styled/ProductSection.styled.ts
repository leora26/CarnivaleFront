import {styled} from "styled-components";

interface ContainerProps {
    direction: 'column' | 'row';
    containerWidth: string;
    containerHeight: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({direction }) => direction};
    width: ${({containerWidth}) => containerWidth};
    height: ${({containerHeight}) => containerHeight};
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    
    & #buttonContainer{
        margin-right: 5%;
    }


    & h2{
        text-transform: uppercase;
        width: 100%;
        margin: 0;
        font-size: 5rem;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 4.5rem;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 60%;
        }


        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 60%;
            font-size: 3rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 4rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 3rem;
        }
        
    }
    
    
        
    }
`

export const ProductsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 80vh;
    margin: 5% 0 5% auto;

     @media (max-width: ${({theme}) => theme.display.laptop}) {
         height: 60vh;
     }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 60vh;
    }
`