import React from 'react';

const CurvedText: React.FC<{ text: string, color: string }> = ({ text, color }) => {
    let fontSize = 20;
    let letterSpacing = 8;
    let viewBox = "25 0 200 200"
    let d = "M 50,180 A 100,100 0 0,1 300,100"
    if(window.innerWidth <= 900){
        fontSize = 15
        letterSpacing = 3;
        viewBox = "0 25 100 200"
        d = "M 50,150 A 100,100 0 0,1 250,150"
    }

    return (
        <svg width="300" height="200" viewBox={viewBox} id="curvedTextV1">
            <defs>
                <path
                    id="curve"
                    d={d}
                    fill="none"
                />
            </defs>
            <text width="150" fontSize={fontSize} fill={color} letterSpacing={letterSpacing}>
                <textPath href="#curve">{text}</textPath>
            </text>
        </svg>
    );
};

export default CurvedText;
