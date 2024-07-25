import React from 'react';
import ReactCurvedText from 'react-curved-text';
import {styled} from "styled-components";

interface CurvedTextProps {
    text: string;
    color: string;
    fontSize: string;
    width: number;
    height: number;
}

interface CurvedTextStyledProps{
    top: string,
    right: string
}

const CurvedTextStyled = styled.div<CurvedTextStyledProps>`
    position: absolute;
    right: ${({right}) => right};
    top: ${({top}) => top};
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
`

const CurvedTextComponent: React.FC<CurvedTextProps> = (props) => {
    const windowSize = window.innerWidth;
    let fontSize = props.fontSize;
    let width = props.width;
    let height = props.height;
    let rx = 75;
    let ry = 75;
    let top = "-10%"
    let right = "0";
    let cx = 90;
    let cy = 90;
    if(windowSize <= 1600 && windowSize > 1400){
        fontSize = "1.3rem"
        width = 190;
        height = 170;
    } else if(windowSize <= 1400 && windowSize > 1024){
        fontSize = "1rem"
        width = 150;
        height = 150;
        rx = 60;
        ry = 60;
        cx = 80;
        cy = 70;

    } else if(windowSize <= 1024 && windowSize > 820 ){
        fontSize = "1rem"
        width = 120;
        height = 120;
        rx = 50;
        ry = 50;
        cx = 60;
        cy = 60;
    } else if (windowSize <= 820){
        fontSize = "0.8rem"
        width = 100;
        height = 100;
        rx = 40;
        ry = 40;
        cx = 50;
        cy = 50;

    }


    return (
        <CurvedTextStyled
        top={top}
        right={right}>
            <ReactCurvedText
                text={props.text}
                width={width}
                height={height}
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                startOffset={0}
                textProps={{ style: { fontSize: fontSize, fill: props.color, letterSpacing: "5px" } }}
            />
        </CurvedTextStyled>
    );
};

export default CurvedTextComponent;
