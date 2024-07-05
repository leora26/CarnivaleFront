import styled, { css, keyframes } from 'styled-components';
import {Link} from "react-router-dom";

interface ScrollingTextWrapperProps {
    to: string;
}

interface ScrollingTextContentProps {
    direction: "left" | "right";
}

export const ScrollingTextWrapper = styled(Link)<ScrollingTextWrapperProps>`
    display: block;
    max-width: 100%;
    text-decoration: none;
    color: inherit;
    overflow-x: hidden; 

`;

export const scrollAnimation = keyframes`
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
`;

export const ScrollingTextContent = styled.ul<ScrollingTextContentProps>`
    display: flex;
    margin: 0;
    flex-wrap: nowrap;
    gap: 1rem;

    ${({ direction }) => direction === 'right' && css`
        animation: ${scrollAnimation} 20s linear infinite;
    `}

    ${({ direction }) => direction === 'left' && css`
        animation: ${scrollAnimation} 20s linear infinite reverse;
    `}

    &[data-animated="true"] {
        overflow: hidden;
        width: max-content;
        animation-play-state: running; 
    }

    & li {
        font-size: 8rem;
        list-style: none;
        text-transform: uppercase;
    }
`;
