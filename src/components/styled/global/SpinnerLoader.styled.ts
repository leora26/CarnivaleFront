import {styled} from "styled-components";

interface SpinnerLoaderStyledProps {
    height: number | undefined;

}


export const SpinnerLoaderStyled = styled.div<SpinnerLoaderStyledProps>`
    height: ${({height}) => height}vh;
`