import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

const scrollAnimationLeft = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
`;

const scrollAnimationRight = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const ScrollingTextWrapper = styled(Link)`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    cursor: pointer;
`;

export const ScrollingTextContentLeft = styled.span`
    display: inline-block;
    animation: ${scrollAnimationLeft} 10s linear infinite;
    color: black;
    width: 100%;
    text-transform: uppercase;
    font-size: 8rem;

`;

export const ScrollingTextContentRight = styled.span`
    display: inline-block;
    animation: ${scrollAnimationRight} 10s linear infinite;
    color: black;
    width: 100%;
    text-transform: uppercase;
    font-size: 8rem;

`;