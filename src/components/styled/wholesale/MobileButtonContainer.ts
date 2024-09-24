import {styled} from "styled-components";

export const MobileButtonContainer = styled.div`
    position: absolute;
    height: 25%;
    margin-top: 10%;
    display: none;
    z-index: 100;
    

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    & button {
        border: none;
        width: 50%;
        height: 100%;
        opacity: 0.000001;
    }
`