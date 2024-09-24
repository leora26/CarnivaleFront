import {styled} from "styled-components";

export const AssortmentCarouselItemStyled = styled.img<{ isPrimary?: boolean }>`
    width: ${(props) => props.isPrimary ? "35%" : "30%"};
    height: ${(props) => props.isPrimary ? "70%" : "55%"};
    border-radius: 2rem;

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        height: ${(props) => props.isPrimary ? "65%" : "50%"};
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: ${(props) => props.isPrimary ? "35%" : "30%"};
        height: ${(props) => props.isPrimary ? "65%" : "45%"};
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        width: ${(props) => props.isPrimary ? "40%" : "40%"};
        height: ${(props) => props.isPrimary ? "50%" : "40%"};
        margin: 0 5px;
        border-radius: 1rem;
        object-fit: cover;
        object-position: center;
    }
`;


export const AssortmentCarouselContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70vh;
    width: 100%;


    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        height: 30vh;
    }

    @media (max-width: ${({theme}) => theme.display.mobile}) {
        height: 40vh;
        width: 100%;
        justify-content: center;
    }
`