import React from "react";
import {
    BackPicture,
    HomepageStyled,
    WorkWithLink, BackVideo
} from "../../components/styled/Homepage.styled";
import TextOverlay from "../../components/styled/TextOverlay";
import {HomePageSectionStyled} from "../../components/styled/HomepageSection.styled";
import CategoryCard from "../../components/styled/CategoryCard";

import LatestStories from "../../components/LatestStories";
import {ScrollingText} from "../../components/ScrollingText";
import ProductSection from "../../components/ProductSection";

import HeroPicture from "../../assets/pictures/hero.png";
import Hero2Picture from "../../assets/pictures/hero2.png";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"
import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"
import HomePageVideo from "../../assets/videos/homepage-video.mp4"


const HomePage = () => {
    return (
        <>
            <HomepageStyled>

                {/*first section*/}
                <HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh" direction="column" id="first-section">
                    <BackPicture src={HeroPicture} alt="Hero picture"/>
                    <TextOverlay>
                        <h1>CARNIVALE</h1>
                        <p>
                            We bring you exceptional foods:
                            pure, distinctive, bursting with taste and value.
                        </p>
                    </TextOverlay>
                </HomePageSectionStyled>

                {/*second section*/}
                <HomePageSectionStyled direction="column">
                    <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>
                    <TextOverlay>
                    <span>
                        Pure products with lots of identity and impact,
                        both in <b>  taste and meaning.</b>
                    </span>
                    </TextOverlay>
                </HomePageSectionStyled>

                <HomePageSectionStyled direction="column">
                    <span id="workWithSpan">We work with</span>
                    <WorkWithLink to="/professionals">professionals</WorkWithLink>
                    <WorkWithLink to="/companies">companies</WorkWithLink>
                    <WorkWithLink to="/enthusiasts">enthusiasts</WorkWithLink>
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
                        <img src={PoultryCategory} alt="Beef category link"/>
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
            <ScrollingText direction="left"/>
            <ScrollingText direction="right"/>


            <BackVideo src={HomePageVideo} autoPlay loop muted/>

        </>
    )
}


export default HomePage;