import {styled} from "styled-components";

export const HerosectionTablet = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 20%;


    &:hover {
        & * {
            color: #FFDD5A;
        }
    }

    & .tabletSVGs {
        width: 100%;
        height: 100%;

        & image {
            width: 100%;
            height: 100%;


        }
    }
`