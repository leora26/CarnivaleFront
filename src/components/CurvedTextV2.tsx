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

const CurvedTextStyled = styled.div`
    position: absolute;
    top: -10%;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;

    @media (max-width: ${({theme}) => theme.display.tabletVertical}) {
        width: 8rem;
        height: 8rem;
    }

    @media (max-width: ${({theme}) => theme.display.smallTabletVertical}) {
        width: 7rem;
        height: 7rem;
    }
`

const CurvedTextComponent: React.FC<CurvedTextProps> = (props) => {
    const windowSize = window.innerWidth;
    let fontSize = props.fontSize;
    let width = props.width;
    let height = props.height;
    let rx = 75;
    let ry = 75;
    let cx = 85;
    let cy = 75;
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
        cy = 60;

    }


    return (
        <CurvedTextStyled>
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
