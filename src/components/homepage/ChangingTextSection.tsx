import {ChangingTextSectionStyled} from "../styled/homepage/ChangingTextSection.styled";
import ChangingText from "../global/ChangingText";
import {ChangingTextContainer} from "../styled/homepage/ChangingText.styled";
import React from "react";

const ChangingTextSection = () => {
    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];


    return (
        <ChangingTextSectionStyled>
            <ChangingTextContainer>
                <ChangingText animationOrder={0} staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                <ChangingText animationOrder={1} staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                <ChangingText animationOrder={2} staticText="AIMING FOR" dynamicText={aimingForText}/>
                <ChangingText animationOrder={3} staticText="OF INGREDIENTS BURSTING WITH "
                              dynamicText={ingredientsText}/>
            </ChangingTextContainer>
        </ChangingTextSectionStyled>
    )
}

export default ChangingTextSection;