import {ImagesContainer, LookAtUsContainer, LookAtUsSectionStyled} from "../styled/homepage/LookAtUsSection.styled";
import React, {useContext} from "react";
import {HomepageContext} from "../../context/HomepageContext";
import {AiOutlinePlus} from "react-icons/ai";
import {IoArrowForward} from "react-icons/io5";

const LookAtUsSection = () => {

    const homepageInfo = useContext(HomepageContext);

    return (
        <LookAtUsSectionStyled>

            <h3>Look at us</h3>


            <LookAtUsContainer>

                <ImagesContainer direction="column">

                    <img src={homepageInfo?.homepageInfo?.gif1} alt="First gif"/>

                    <ImagesContainer direction='row'>
                        <img src={homepageInfo?.homepageInfo?.img1} alt="First image"/>
                        <button>See more <IoArrowForward id="seeMoreIcon"/></button>
                    </ImagesContainer>

                </ImagesContainer>

                <ImagesContainer direction="column">
                    <img src={homepageInfo?.homepageInfo?.gif2} alt="Second gif"/>
                </ImagesContainer>

                <ImagesContainer direction="column">

                    <ImagesContainer direction="row">
                        <img src={homepageInfo?.homepageInfo?.img2} alt="Second gif"/>
                        <img src={homepageInfo?.homepageInfo?.img3} alt="Second gif"/>
                    </ImagesContainer>

                    <img src={homepageInfo?.homepageInfo?.img4} alt="Second gif"/>

                </ImagesContainer>

            </LookAtUsContainer>

        </LookAtUsSectionStyled>
    )
}

export default LookAtUsSection;