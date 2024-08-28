import {styled} from "styled-components";

interface ContainerProps {
    direction: 'column' | 'row';
    containerWidth: string;
    containerHeight: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: ${({direction}) => direction};
    width: ${({containerWidth}) => containerWidth};
    height: ${({containerHeight}) => containerHeight};
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    & #buttonContainer {
        margin-right: 5%;
    }

    & .productSectionIconButton:hover {
        background-color: black;
    }

    & .mobileNone {
        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            display: none;
        }
    }

    & #productSectionImg {
        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            display: none;
        }

    }


    & h2 {
        text-transform: uppercase;
        width: 100%;
        margin: 0;
        font-size: 5rem;

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            font-size: 4.5rem;
        }
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: 80%;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: 80%;
            font-size: 3rem;
        }
        @media (max-width: ${({theme}) => theme.display.smallTabletHorizontal}) {
            font-size: 4rem;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            font-size: 2rem;
        }

        @media (max-width: ${({theme}) => theme.display.mobile}) {
            width: 100%;
            font-size: 1.6rem;
        }
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        overflow-x: scroll;
    }

`

export const ProductsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 80vh;
    margin: 5% 0 10% auto;

     @media (max-width: ${({theme}) => theme.display.laptop}) {
         height: 100vh;
     }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 60vh;
    }

  
`