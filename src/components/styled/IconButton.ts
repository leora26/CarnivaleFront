import {styled} from "styled-components";

interface IconButtonProps {
    buttonWidth: number;
    buttonHeight: number;
    iconWidth: number;
    iconHeight: number;
}

const IconButton = styled.button<IconButtonProps>`
    border: none;
    padding: 0;
    margin: 0;
    color: black;
    background-color: #fff;
    width: ${({buttonWidth}) => buttonWidth}px;
    height: ${({buttonHeight}) => buttonHeight}px;
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
        width: ${({iconWidth}) => iconWidth}px;
        height: ${({iconHeight}) => iconHeight}px;
        border: 1px solid #BEBEBE;
        border-radius: 50%;
        color: #BEBEBE;
        transition: color 0.3s, background-color 0.3s;

        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: ${({iconWidth}) => iconWidth / 1.3}px;
            height: ${({iconHeight}) => iconHeight / 1.3}px;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: ${({iconWidth}) => iconWidth / 1.5}px;
            height: ${({iconHeight}) => iconHeight / 1.5}px;
        }

        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: ${({iconWidth}) => iconWidth / 1.2}px;
            height: ${({iconHeight}) => iconHeight / 1.2}px;
        }
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: ${({buttonWidth}) => buttonWidth / 1.3}px;
        height: ${({buttonHeight}) => buttonHeight / 1.3}px;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: ${({buttonWidth}) => buttonWidth / 1.5}px;
        height: ${({buttonHeight}) => buttonHeight / 1.5}px;
    }

    @media (max-width: ${({theme}) => theme.display.laptop}) {
        width: ${({buttonWidth}) => buttonWidth / 1.2}px;
        height: ${({buttonHeight}) => buttonHeight / 1.2}px;
    }
`

export default IconButton;