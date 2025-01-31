import {WholesaleStyled} from "../../components/styled/wholesale/Wholesale.styled";
import {WholesaleSection} from "../../components/styled/wholesale/WholesaleSection";
import TextOverlay from "../../components/styled/global/TextOverlay";
import React from "react";
import WholesaleHeroSVG from "../../assets/svg/WholesaleHeroSVG";

const Wholesale = () => {
    return (
        <WholesaleStyled>
            <WholesaleSection>

                <WholesaleHeroSVG/>

                <TextOverlay>
                    <h2 id="h2-wholesale">Start Carnivalizing your menu here!</h2>
                    <p id="p-wholesale">
                        Step into our lush selection of handpicked ingredients, bursting with identity, powered by
                        nature.
                    </p>
                </TextOverlay>
            </WholesaleSection>

        </WholesaleStyled>
    )
}

export default Wholesale;