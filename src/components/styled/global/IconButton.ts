import {styled} from "styled-components";
import {motion} from "framer-motion";

interface IconButtonProps {
    buttonWidth: number;
    buttonHeight: number;
    iconWidth: number;
    iconHeight: number;
    borderSize: string;
    borderColor: string;
}

const IconButton = styled(motion.button)<IconButtonProps>`
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

    &:hover .iconProductSection {
        color: white;
    }

    & .iconProductSection {
        color: #BEBEBE;
        transition: color 0.3s, background-color 0.3s;
    }
    
    & :first-child{
        width: ${({iconWidth}) => iconWidth}px;
        height: ${({iconHeight}) => iconHeight}px;
        border-radius: 50%;
        border: ${({borderSize}) => borderSize} solid ${({borderColor}) => borderColor};


        @media (max-width: ${({theme}) => theme.display.laptop}) {
            width: ${({iconWidth}) => iconWidth / 1.2}px;
            height: ${({iconHeight}) => iconHeight / 1.2}px;
        }
        
        @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
            width: ${({iconWidth}) => iconWidth / 1.3}px;
            height: ${({iconHeight}) => iconHeight / 1.3}px;
        }

        @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
            width: ${({iconWidth}) => iconWidth / 1.5}px;
            height: ${({iconHeight}) => iconHeight / 1.5}px;
        }

        @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
            width: ${({iconWidth}) => iconWidth / 1.7}px;
            height: ${({iconHeight}) => iconHeight / 1.7}px;
        }
    }
    @media (max-width: ${({theme}) => theme.display.laptop}) {
        width: ${({buttonWidth}) => buttonWidth / 1.2}px;
        height: ${({buttonHeight}) => buttonHeight / 1.2}px;
    }

    @media (max-width: ${({theme}) => theme.display.tabletHorizontal}) {
        width: ${({buttonWidth}) => buttonWidth / 1.3}px;
        height: ${({buttonHeight}) => buttonHeight / 1.3}px;
    }

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: ${({buttonWidth}) => buttonWidth / 1.5}px;
        height: ${({buttonHeight}) => buttonHeight / 1.5}px;
    }

`

export default IconButton;