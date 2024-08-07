import {
    ScrollingTextWrapper,
    ScrollingTextContent
} from "../styled/homepage/ScrollingText.styled";
import React from "react";

interface ScrollingTextProp {
    direction: "left" | "right";
    children: React.ReactNode;
    backgroundColor: string
}

export const ScrollingText: React.FC<ScrollingTextProp> = (props) => {
    return (
        <ScrollingTextWrapper to="/contactUs" backgroundColor={props.backgroundColor}>
            <ScrollingTextContent direction={props.direction} data-animated="true">
                {props.children}
            </ScrollingTextContent>
        </ScrollingTextWrapper>
    );
};
