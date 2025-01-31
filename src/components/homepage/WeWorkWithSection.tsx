import {WeWorkWithHeading, WeWorkWithSectionStyled} from "../styled/homepage/WeWorkWithSection.styled";
import React from "react";
import ChangingText from "../global/ChangingText";
import {IoArrowForward} from "react-icons/io5";
import IconButton from "../styled/global/IconButton";
import {useNavigate} from "react-router-dom";

const WeWorkWithSection = () => {
    const navigate = useNavigate();

    const firstText = ["RESTAURANTS", "CATERERS", "WINEBARS", "CHEFS", "COMPANIES", "BISTROS", "YOU"];
    const secondText = ["DELIS", "ARTISANS", "OFFICES", "KITCHENS", "GROCERS", "PROVISIONERS", "HOTELS"];
    const thirdText = ["YACHTS", "CORPORATE KITCHENS", "PRODUCERS", "ENTHUSIASTS", "SHOPS", "EMBASSIES", "PRIVATE JETS"];

    const handleClick = () => {
        navigate("/wholesale");
    }

    return (
        <WeWorkWithSectionStyled id="weWorkWithSection">
            <span>We work with</span>
            <WeWorkWithHeading>
                <ChangingText animationOrder={0} dynamicText={firstText} className="headingText"/>
                <IconButton
                    borderColor="black"
                    borderSize="3px"
                    buttonHeight={120}
                    buttonWidth={120}
                    iconHeight={120}
                    iconWidth={120}
                    onClick={handleClick}
                >
                    <IoArrowForward/>
                </IconButton>
            </WeWorkWithHeading>
            <ChangingText animationOrder={1} dynamicText={secondText} className="weWorkWithText"/>
            <ChangingText animationOrder={2} dynamicText={thirdText} className="weWorkWithText"/>
        </WeWorkWithSectionStyled>
    )
}

export default WeWorkWithSection