import React, {useContext} from "react";
import {HomepageContext} from "../../context/HomepageContext";
import {IoArrowForward} from "react-icons/io5";
import {
    BigImageContainerTablet, FirstImagesContainer, GifImageButtonContainer,
    ImageButtonContainer, LastImagesContainer,
    LookAtUsTabletSectionStyled
} from "../styled/homepage/LookAtUsTabletSection.styled";

const LookAtUsTabletSection = () => {

    const homepageInfo = useContext(HomepageContext);

    return (
        <LookAtUsTabletSectionStyled>

            <h3>Look at us</h3>

            <BigImageContainerTablet>

                <FirstImagesContainer>
                    <img src={homepageInfo?.homepageInfo?.img4} id="fourthImage" alt="Fourth image"/>

                    <GifImageButtonContainer>
                        <img src={homepageInfo?.homepageInfo?.gif2} id="secondGif" alt="Second gif"/>
                        <ImageButtonContainer>
                            <button id="seeMoreButton">
                                <div id="buttonContainer">
                                    <span>See more </span>
                                    <IoArrowForward id="seeMoreIcon"/>
                                </div>
                            </button>
                            <img src={homepageInfo?.homepageInfo?.img2} id="secondImage" alt="Second image"/>
                        </ImageButtonContainer>
                    </GifImageButtonContainer>
                </FirstImagesContainer>

                <img src={homepageInfo?.homepageInfo?.gif1} id="firstGif" alt="First gif"/>
            </BigImageContainerTablet>

            <LastImagesContainer>
                <img src={homepageInfo?.homepageInfo?.img3} id="thirdImage" alt="Third image"/>
                <img src={homepageInfo?.homepageInfo?.img1} id="firstImage" alt="First image"/>
            </LastImagesContainer>
        </LookAtUsTabletSectionStyled>
    )
}

export default LookAtUsTabletSection;