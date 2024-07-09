import {
    ScrollingTextWrapper,
    ScrollingTextContent
} from "./styled/ScrollingText.styled";
import GetInTouch1 from "../assets/pictures/get-in-touch1.png";
import GetInTouch2 from "../assets/pictures/get-in-touch2.png";
import GetInTouch3 from "../assets/pictures/get-in-touch3.png";
import React from "react";

interface ScrollingTextProp {
    direction: "left" | "right";
}

export const ScrollingText: React.FC<ScrollingTextProp> = ({direction}) => {
    return (
        <ScrollingTextWrapper to="/contactUs">
            <ScrollingTextContent direction={direction} data-animated="true">
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch1} alt=""/>
                </li>
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch2} alt=""/>
                </li>
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch3} alt=""/>
                </li>
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch1} alt=""/>
                </li>
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch2} alt=""/>
                </li>
                <li>
                    <span>Get in touch</span>
                    <img src={GetInTouch3} alt=""/>
                </li>
            </ScrollingTextContent>
        </ScrollingTextWrapper>
    );
};
