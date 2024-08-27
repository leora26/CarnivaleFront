import React, {useState} from "react";
import {
    BackPicture,
    HomepageStyled,
    BackVideo, ExploreArrow, GetInTouchContainer
} from "../../components/styled/homepage/Homepage.styled";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {HomePageSectionStyled} from "../../components/styled/homepage/HomepageSection.styled";
import CategoryCard from "../../components/styled/homepage/CategoryCard";
import {ChangingTextContainer} from "../../components/styled/homepage/ChangingText.styled";
import {IoArrowForward} from "react-icons/io5";

import LatestStories from "../../components/homepage/LatestStories";
import {ScrollingText} from "../../components/homepage/ScrollingText";
import ProductSection from "../../components/homepage/ProductSection";
import GetInTouch from "../../components/homepage/GetInTouch";
import ChangingText from "../../components/global/ChangingText";
import WeWorkWithLink from "../../components/homepage/WeWorkWithLink";


import HeroPicture from "../../assets/pictures/hero.png";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"
import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"
import HomePageVideo from "../../assets/videos/homepage-video.mp4"
import CurvedText from "../../components/homepage/CurvedText";
import CurvedTextV2 from "../../components/homepage/CurvedTextV2";


const MobileHomePage = () => {
    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <HomepageStyled>
            <HomePageSectionStyled tabletHorizontalSectionHeight="60vh"
                                   tabletVerticalSectionHeight="30vh" direction="column" id="first-section"
                                   onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <svg width="90vw" height="60vh" viewBox="0 0 343 520" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="clipShape">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24 0C10.7452 0 0 10.7452 0 24V496C0 509.255 10.7452 520 24 520H240.114C250.008 520 256.151 506.489 253.285 497.018C251.799 492.107 251 486.897 251 481.5C251 451.953 274.953 428 304.5 428C309.897 428 315.107 428.799 320.018 430.285C329.489 433.151 343 427.008 343 417.114V24C343 10.7452 332.255 0 319 0H24ZM343 481.5C343 460.237 325.763 443 304.5 443C283.237 443 266 460.237 266 481.5C266 502.763 283.237 520 304.5 520C325.763 520 343 502.763 343 481.5Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>
                    <image href={HeroPicture} width="100%" height="100%" clip-path="url(#clipShape)"
                           preserveAspectRatio="xMidYMid slice"/>
                </svg>
                <TextOverlay>
                    <h1>CARNIVALE</h1>
                    <p>
                        We bring you exceptional foods:
                        pure, distinctive, bursting with taste and value.
                    </p>
                </TextOverlay>
                <ExploreArrow>
                    <IoArrowForward id="heroSectionArrow"/>
                </ExploreArrow>
            </HomePageSectionStyled>

        </HomepageStyled>
    )
}


export default MobileHomePage;