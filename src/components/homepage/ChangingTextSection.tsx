import {ChangingTextContainer, ChangingTextSectionStyled} from "../styled/homepage/ChangingTextSection.styled";
import ChangingText from "../global/ChangingText";
import React from "react";
import {TextOverlay} from "../styled/global/TextOverlay";
import WeSeekForSVG from "../../assets/svg/WeSeekForSVG";
import {useNavigate} from "react-router-dom";

const ChangingTextSection = () => {

    const navigate = useNavigate();

    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    const handleClick = () => {
        navigate(`/stories`);
    };

    return (
        <ChangingTextSectionStyled onClick={handleClick}>
            <ChangingTextContainer>
                <WeSeekForSVG/>


                <TextOverlay>
                    <ChangingText animationOrder={0} staticText="WE SEEK FOR" dynamicText={weSeekForText}
                                  className="changingTextParagraph"/>
                    <ChangingText animationOrder={1} staticText="GLADLY OFFER IT TO" dynamicText={offerText}
                                  className="changingTextParagraph"/>
                    <ChangingText animationOrder={2} staticText="AIMING FOR" dynamicText={aimingForText}
                                  className="changingTextParagraph"/>
                    <ChangingText animationOrder={3} staticText="OF INGREDIENTS BURSTING WITH "
                                  dynamicText={ingredientsText} className="changingTextParagraph"/>
                </TextOverlay>
            </ChangingTextContainer>
        </ChangingTextSectionStyled>
    )
}

export default ChangingTextSection;