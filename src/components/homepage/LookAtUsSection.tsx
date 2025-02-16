import {
    BigImageContainer,
    ImagesContainer,
    LookAtUsContainer,
    LookAtUsSectionStyled
} from "../styled/homepage/LookAtUsSection.styled";
import React, {useContext} from "react";
import {HomepageContext} from "../../context/HomepageContext";
import {IoArrowForward} from "react-icons/io5";

const LookAtUsSection = () => {

    const homepageInfo = useContext(HomepageContext);

    return (
        <LookAtUsSectionStyled>

            <h3>Look at us</h3>


            <LookAtUsContainer>

                <BigImageContainer direction="column" id="firstImages" className="bigSection">

                    <img src={homepageInfo?.homepageInfo?.img1} id="firstImage" alt="First image"/>

                    <ImagesContainer direction='row' id="imageAndButton">
                        <img src={homepageInfo?.homepageInfo?.img2} id="secondImage" alt="Second image"/>
                        <button id="seeMoreButton">
                            <div id="buttonContainer">
                                <span>See more </span>
                                <IoArrowForward id="seeMoreIcon"/>
                            </div>
                        </button>
                    </ImagesContainer>

                </BigImageContainer>

                <BigImageContainer direction="column" id="bigGif">
                    <img src={homepageInfo?.homepageInfo?.gif1} id="firstGif" alt="First gif"/>
                </BigImageContainer>

                <BigImageContainer direction="column" id="secondImages">

                    <ImagesContainer direction="row" id="smallestImages">
                        <img src={homepageInfo?.homepageInfo?.gif2} id="secondGif" alt="Second gif"/>
                        <img src={homepageInfo?.homepageInfo?.img3} id="thirdImage" alt="Third image"/>
                    </ImagesContainer>

                    <img src={homepageInfo?.homepageInfo?.img4} id="fourthImage" alt="Fourth image"/>

                </BigImageContainer>

            </LookAtUsContainer>

        </LookAtUsSectionStyled>
    )
}

export default LookAtUsSection;