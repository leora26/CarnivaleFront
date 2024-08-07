import React, { useState, useEffect } from "react";
import {ChangingTextStyled} from "../styled/homepage/ChangingText.styled";

interface ChangingTextProps {
    staticText: string;
    dynamicText: string[];
}

const ChangingText: React.FC<ChangingTextProps> = (props) => {
    const { staticText, dynamicText } = props;
    const [changingText, setChangingText] = useState<string>(dynamicText[0]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
        }, 2000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [dynamicText]);

    useEffect(() => {
        setChangingText(dynamicText[index]);
    }, [index, dynamicText]);

    return (
        <ChangingTextStyled>
            <h5>{staticText}</h5>
            <p>{changingText}</p>
        </ChangingTextStyled>
    );
}

export default ChangingText;
