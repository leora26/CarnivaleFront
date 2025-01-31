import React, { useState, useEffect } from "react";
import {ChangingTextStyled} from "../styled/homepage/ChangingText.styled";

interface ChangingTextProps {
    staticText?: string;
    dynamicText: string[];
    animationOrder: number;
    className?: string;
}

const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            delay: i * 0.4,
        },
    }),
};

const ChangingText = ({staticText, dynamicText, animationOrder, className}: ChangingTextProps): JSX.Element => {
    const [changingText, setChangingText] = useState<string>(dynamicText[0]);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dynamicText.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [dynamicText]);

    useEffect(() => {
        setChangingText(dynamicText[index]);
    }, [index, dynamicText]);

    return (
        <ChangingTextStyled
            custom={animationOrder}
            variants={textVariants}
        >
            <h5>{staticText}</h5>
            <p className={className}>{changingText}</p>
        </ChangingTextStyled>
    );
}

export default ChangingText;
