import {styled} from "styled-components";

export const WholeSaleHeroSection = styled.section`
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;

    & svg {
        position: absolute;
        z-index: 2;
        width: 90vw;
        height: 85vh;

        & image {
            width: 100%;
            height: 100%;
        }
    }
`

