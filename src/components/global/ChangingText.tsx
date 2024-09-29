import React, { useState, useEffect } from "react";
import {ChangingTextStyled} from "../styled/homepage/ChangingText.styled";

interface ChangingTextProps {
    staticText: string;
    dynamicText: string[];
    animationOrder: number;
}

const textVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
            delay: i * 0.4, // Custom delay for each text based on index
        },
    }),
};

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
        <ChangingTextStyled
            custom={props.animationOrder}
            variants={textVariants}
        >
            <h5>{staticText}</h5>
            <p>{changingText}</p>
        </ChangingTextStyled>
    );
}

export default ChangingText;
