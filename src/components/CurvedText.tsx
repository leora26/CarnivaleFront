import React from 'react';

const CurvedText: React.FC<{ text: string }> = ({ text }) => {
    let fontSize = 20;
    let letterSpacing = 8;
    let viewBox = "0 0 100 200"
    let d = "M 50,180 A 100,100 0 0,1 270,100"
    if(window.innerWidth <= 900){
        fontSize = 13
        letterSpacing = 5;
        viewBox = "0 25 100 200"
        d = "M 50,150 A 100,100 0 0,1 250,150"
    }

    return (
        <svg width="300" height="200" viewBox={viewBox}>
            <defs>
                <path
                    id="curve"
                    d={d}
                    fill="none"
                />
            </defs>
            <text width="200" fontSize={fontSize} fill="white" letterSpacing={letterSpacing}>
                <textPath href="#curve">{text}</textPath>
            </text>
        </svg>
    );
};

export default CurvedText;
