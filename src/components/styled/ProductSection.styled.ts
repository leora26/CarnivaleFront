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
    }
    
    & button {
        border: none;
        padding: 0;
        margin: 0;
        color: black;
        background-color: #fff;
        width: 70px;
        height: 70px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: black;
        }

        &:hover .iconProductSection {
            color: white;
        }

        & .iconProductSection {
            width: 70px;
            height: 70px;
            border: 1px solid #BEBEBE;
            border-radius: 50%;
            color: #BEBEBE;
            transition: color 0.3s, background-color 0.3s;
        }
        
    }
`

export const ProductsContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    height: 80vh;
    margin: 5% 0 5% auto;
`