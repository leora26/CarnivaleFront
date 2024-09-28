import React, {useState} from "react";
import {
    BackPicture,
    BackVideo,
    GetInTouchContainer,
    HomepageStyled
} from "../../components/styled/homepage/Homepage.styled";
import {HomePageSectionStyled} from "../../components/styled/homepage/HomepageSection.styled";
import HeroPicture from "../../assets/pictures/hero.png";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {ChangingTextContainer} from "../../components/styled/homepage/ChangingText.styled";
import ChangingText from "../../components/global/ChangingText";
import CategoryCard from "../../components/styled/homepage/CategoryCard";
import BeefCategory from "../../assets/pictures/category-beef.png";
import DairyCategory from "../../assets/pictures/category-dairy.png";
import CurvedTextV2 from "../../components/homepage/CurvedTextV2";
import PoultryCategory from "../../assets/pictures/category-poultry.png";
import WeWorkWithLink from "../../components/homepage/WeWorkWithLink";
import LatestStories from "../../components/homepage/LatestStories";
import ProductSection from "../../components/homepage/ProductSection";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png";
import {ScrollingText} from "../../components/homepage/ScrollingText";
import GetInTouch from "../../components/homepage/GetInTouch";
import HomePageVideo from "../../assets/videos/homepage-video.mp4";

const TabletHomePage = () => {
    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    return (
        <>
            <HomepageStyled>
                <HomePageSectionStyled direction="column" className="first-section">

                    <svg width="95vw" height="95vh" viewBox="0 0 550 540" xmlns="http://www.w3.org/2000/svg">
                        <image href={HeroPicture} width="100%" height="100%" clipPath="url(#homepageFirstSectionTablet)"
                               preserveAspectRatio="xMidYMid slice"/>
                        <path
                            d="M457.341 496.181L479.713 480.193L465.461 477.413L465.992 473.57L486.743 477.618L483.853 498.563L480.046 497.82L482.031 483.436L459.659 499.424L457.341 496.181Z"
                            fill="white"
                        />
                        <defs>
                            <clipPath id="homepageFirstSectionTablet">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M40 8C26.7452 8 16 18.7452 16 32V504C16 517.255 26.7452 528 40 528H406.114C416.008 528 422.151 514.489 419.285 505.018C417.799 500.107 417 494.897 417 489.5C417 459.953 440.953 436 470.5 436C475.897 436 481.107 436.799 486.018 438.285C495.489 441.151 509 435.008 509 425.114V32C509 18.7452 498.255 8 485 8H40ZM509 489.5C509 468.237 491.763 451 470.5 451C449.237 451 432 468.237 432 489.5C432 510.763 449.237 528 470.5 528C491.763 528 509 510.763 509 489.5Z"
                                    fill="#C4C4C4"
                                />
                            </clipPath>
                        </defs>
                    </svg>


                    <TextOverlay>
                        <h1>CARNIVALE</h1>
                        <p>
                            We bring you exceptional foods:
                            pure, distinctive, bursting with taste and value.
                        </p>
                    </TextOverlay>

                </HomePageSectionStyled>


                <HomePageSectionStyled direction="column" tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh">
                    <ChangingTextContainer>
                        <ChangingText staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                        <ChangingText staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                        <ChangingText staticText="AIMING FOR" dynamicText={aimingForText}/>
                        <ChangingText staticText="INGREDIENTS BURSTING WITH " dynamicText={ingredientsText}/>
                    </ChangingTextContainer>
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

                <HomePageSectionStyled direction="column">
                    <span id="workWithSpan">We work with</span>
                    <WeWorkWithLink link="/professionals">professionals</WeWorkWithLink>
                    <WeWorkWithLink link="/companies">companies</WeWorkWithLink>
                    <WeWorkWithLink link="/enthusiasts">enthusiasts</WeWorkWithLink>
                </HomePageSectionStyled>


                <h4>LATEST STORIES</h4>
                <LatestStories/>

            </HomepageStyled>
            <ProductSection/>
            <HomepageStyled>

                <HomePageSectionStyled direction="column">
                    <BackPicture src={HomePageBoxes} alt="Boxes picture"/>
                    <TextOverlay>
                        <h2>BOXES</h2>
                        <h3>For your company</h3>
                    </TextOverlay>
                </HomePageSectionStyled>
                {/*<HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh"*/}
                {/*                       tabletVerticalSectionHeight="30vh" direction="column">*/}
                {/*    <BackPicture src={BookingPicture} alt="Booking picture"/>*/}
                {/*    <TextOverlay>*/}
                {/*        <h1 id="booking-heading">BOOK AN EVENT WITH US</h1>*/}
                {/*        <input type="date"/>*/}
                {/*    </TextOverlay>*/}
                {/*</HomePageSectionStyled>*/}

            </HomepageStyled>
            <GetInTouchContainer>
                <ScrollingText direction="left" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
                <ScrollingText direction="right" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
            </GetInTouchContainer>


            {/*<HomepageStyled>*/}
            {/*    <HomePageSectionStyled direction="column">*/}
            {/*        <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>*/}
            {/*        <TextOverlay>*/}
            {/*        <span>*/}
            {/*            Pure products with lots of identity and impact,*/}
            {/*            both in <b>  taste and meaning.</b>*/}
            {/*        </span>*/}
            {/*        </TextOverlay>*/}
            {/*    </HomePageSectionStyled>*/}
            {/*</HomepageStyled>*/}

            <BackVideo src={HomePageVideo} autoPlay loop muted/>

        </>
    )
}

export default TabletHomePage;