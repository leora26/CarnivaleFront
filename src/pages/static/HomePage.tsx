import React, {useState} from "react";
import {
    BackPicture,
    HomepageStyled,
    BackVideo, ExploreArrow, GetInTouchContainer
} from "../../components/styled/Homepage.styled";
import TextOverlay from "../../components/styled/TextOverlay";
import {HomePageSectionStyled} from "../../components/styled/HomepageSection.styled";
import CategoryCard from "../../components/styled/CategoryCard";
import {ChangingTextContainer} from "../../components/styled/ChangingText.styled";
import {IoArrowForward} from "react-icons/io5";

import LatestStories from "../../components/LatestStories";
import {ScrollingText} from "../../components/ScrollingText";
import ProductSection from "../../components/ProductSection";
import GetInTouch from "../../components/GetInTouch";
import ChangingText from "../../components/ChangingText";
import WeWorkWithLink from "../../components/WeWorkWithLink";


import HeroPicture from "../../assets/pictures/hero.png";
import Hero2Picture from "../../assets/pictures/hero2.png";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"
import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"
import HomePageVideo from "../../assets/videos/homepage-video.mp4"
import CurvedText from "../../components/CurvedText";
import CurvedTextV2 from "../../components/CurvedTextV2";


const HomePage = () => {
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
        <>
            <HomepageStyled>

                {/*first section*/}
                <HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh" direction="column" id="first-section"
                                       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <svg width="90vw" height="60vh" viewBox="0 0 1320 474" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="clipShape">
                                <path
                                    d="M24 0C10.7452 0 0 10.7452 0 24V450C0 463.255 10.7451 474 24 474H1148.9C1167.73 474 1179.95 447.75 1176.46 429.239C1175.5 424.14 1175 418.879 1175 413.5C1175 366.832 1212.83 329 1259.5 329C1264.88 329 1270.14 329.503 1275.24 330.463C1293.75 333.95 1320 321.733 1320 302.897V24C1320 10.7452 1309.25 0 1296 0H24ZM1320 413.5C1320 380.087 1292.91 353 1259.5 353C1226.09 353 1199 380.087 1199 413.5C1199 446.913 1226.09 474 1259.5 474C1292.91 474 1320 446.913 1320 413.5Z"/>
                            </clipPath>
                        </defs>
                        <image href={HeroPicture} width="100%" height="100%" clipPath="url(#clipShape)"
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
                        <CurvedText text="Connect with us" color={isHovered ? "#FFDD5A" : "white"}/>
                        <IoArrowForward id="heroSectionArrow"/>
                    </ExploreArrow>
                </HomePageSectionStyled>


                {/*second section*/}

                <HomePageSectionStyled direction="column" sectionHeight="70vh" tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh">
                    <ChangingTextContainer>
                        <ChangingText staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                        <ChangingText staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                        <ChangingText staticText="AIMING FOR" dynamicText={aimingForText}/>
                        <ChangingText staticText="INGREDIENTS BURSTING WITH " dynamicText={ingredientsText}/>
                    </ChangingTextContainer>
                </HomePageSectionStyled>

                <HomePageSectionStyled direction="column">
                    <span id="workWithSpan">We work with</span>
                    <WeWorkWithLink link="/professionals">professionals</WeWorkWithLink>
                    <WeWorkWithLink link="/companies">companies</WeWorkWithLink>
                    <WeWorkWithLink link="/enthusiasts">enthusiasts</WeWorkWithLink>
                </HomePageSectionStyled>

                <HomePageSectionStyled direction="row">
                    <h2 id="whatDoWeHave">what do we have?</h2>
                    <CategoryCard to="/beef">
                        <img src={BeefCategory} alt="Beef category link"/>
                        <h3>beef</h3>
                        <p>
                            Happiness is an old and fat cow
                        </p>
                    </CategoryCard>

                    <CategoryCard to="/beef">
                        <img src={DairyCategory} alt="Dairy category link"/>
                        <h3>dairy</h3>
                        <p>
                            With a weakness for fresh cheeses
                        </p>
                    </CategoryCard>

                    <CategoryCard to="/beef">
                        <CurvedTextV2
                            text="See all we have See all we have"
                            color="#DC3618"
                            fontSize="1.4rem"
                            width={200}
                            height={200}
                        />
                        <img src={PoultryCategory} alt="Poutry category link"/>
                        <h3>poultry</h3>
                        <p>
                            Free range is no joke
                        </p>
                    </CategoryCard>
                </HomePageSectionStyled>

                {/*fourth section*/}
                <HomePageSectionStyled direction="column">
                    <BackPicture src={HomePageBoxes} alt="Boxes picture"/>
                    <TextOverlay>
                        <h2>BOXES</h2>
                        <h3>FOR YOU BIG COMPANIES</h3>
                    </TextOverlay>
                </HomePageSectionStyled>
            </HomepageStyled>
            <ProductSection/>
            <HomepageStyled>
                {/*<HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh"*/}
                {/*                       tabletVerticalSectionHeight="30vh" direction="column">*/}
                {/*    <BackPicture src={BookingPicture} alt="Booking picture"/>*/}
                {/*    <TextOverlay>*/}
                {/*        <h1 id="booking-heading">BOOK AN EVENT WITH US</h1>*/}
                {/*        <input type="date"/>*/}
                {/*    </TextOverlay>*/}
                {/*</HomePageSectionStyled>*/}

                <h4>LATEST STORIES</h4>
                <LatestStories/>

            </HomepageStyled>
            <GetInTouchContainer>
                <ScrollingText direction="left" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
                <ScrollingText direction="right" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
            </GetInTouchContainer>


            <HomepageStyled>
                <HomePageSectionStyled direction="column">
                    <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>
                    <TextOverlay>
                    <span>
                        Pure products with lots of identity and impact,
                        both in <b>  taste and meaning.</b>
                    </span>
                    </TextOverlay>
                </HomePageSectionStyled>
            </HomepageStyled>

            <BackVideo src={HomePageVideo} autoPlay loop muted/>

        </>
    )
}


export default HomePage;