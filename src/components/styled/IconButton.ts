import {styled} from "styled-components";

interface IconButtonProps {
    buttonWidth: string;
    buttonHeight: string;
    iconWidth: string;
    iconHeight: string;
}

const IconButton = styled.button<IconButtonProps>`
    border: none;
    padding: 0;
    margin: 0;
    color: black;
    background-color: #fff;
    width: ${({buttonWidth}) => buttonWidth};
    height: ${({buttonHeight}) => buttonHeight};
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
        width: ${({iconWidth}) => iconWidth};
        height: ${({iconHeight}) => iconHeight};
        border: 1px solid #BEBEBE;
        border-radius: 50%;
        color: #BEBEBE;
        transition: color 0.3s, background-color 0.3s;
    }
`

export default IconButton;