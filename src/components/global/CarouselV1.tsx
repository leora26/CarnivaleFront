import React from "react";
import {motion} from "framer-motion";
import {CarouselV1Styled} from "../styled/global/CarouselV1.styled";


interface CarouselV1Props {
    children: React.ReactNode;
    visibleIndex: number;
    direction: number;
    x: number;
}


const CarouselV1: React.FC<CarouselV1Props> = (props) => {
    return (
        <CarouselV1Styled
            key={props.visibleIndex}
            initial={{x: props.direction * props.x}}
            animate={{x: 0}}
            exit={{x: props.direction * (-1 * props.x)}}
            transition={{duration: 0.5}}
        >
            {props.children}
        </CarouselV1Styled>
    );
}

export default CarouselV1;