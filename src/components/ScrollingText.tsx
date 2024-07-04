import {ScrollingTextWrapper, ScrollingTextContentLeft, ScrollingTextContentRight} from "./styled/ScrollingText.styled";
import GetInTouch1 from "../assets/pictures/get-in-touch1.png"
import GetInTouch2 from "../assets/pictures/get-in-touch2.png"
import GetInTouch3 from "../assets/pictures/get-in-touch3.png"


export const ScrollingTextLeft = () => {
    return (
        <ScrollingTextWrapper to="/contantUs">
            <ScrollingTextContentLeft>
                Get in touch
                <img src={GetInTouch1} alt=""/>
                Get in touch
                <img src={GetInTouch2} alt=""/>
                Get in touch
                <img src={GetInTouch3} alt=""/>
                Get in touch
                <img src={GetInTouch3} alt=""/>
                Get in touch
                <img src={GetInTouch2} alt=""/>
                Get in touch
                <img src={GetInTouch1} alt=""/>
            </ScrollingTextContentLeft>
        </ScrollingTextWrapper>
    );
}

export const ScrollingTextRight = () => {
    return (
        <ScrollingTextWrapper to="/contantUs">
            <ScrollingTextContentRight>
                Get in touch
                <img src={GetInTouch1} alt=""/>
                Get in touch
                <img src={GetInTouch2} alt=""/>
                Get in touch
                <img src={GetInTouch3} alt=""/>
                Get in touch
                <img src={GetInTouch3} alt=""/>
                Get in touch
                <img src={GetInTouch2} alt=""/>
                Get in touch
                <img src={GetInTouch1} alt=""/>
            </ScrollingTextContentRight>
        </ScrollingTextWrapper>
    );
}

