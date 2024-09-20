import React from "react";
import {motion} from "framer-motion";


interface CarouselV1Props {
    children: React.ReactNode;
    visibleIndex: number;
    direction: number;
    x: number;
}


const CarouselV1: React.FC<CarouselV1Props> = (props) => {
    return (
        <motion.div
            key={props.visibleIndex}
            initial={{x: props.direction * props.x}}
            animate={{x: 0}}
            exit={{x: props.direction * (-1 * props.x)}}
            transition={{duration: 0.5}}
            style={{display: 'flex', width: "100%"}}
        >
            {props.children}
        </motion.div>
    );
}

export default CarouselV1;