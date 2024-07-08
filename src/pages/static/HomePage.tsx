import {
    BackPicture,
    HomepageStyled,
    HomePageSectionStyled,
    TextOverlay,
    WorkWithLink
} from "../../components/styled/Homepage.styled";
import HeroPicture from "../../assets/pictures/hero.png";
import Hero2Picture from "../../assets/pictures/hero2.png";
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"
import {LatestStoriesStyled} from "../../components/styled/LatestStories.styled";
import LatestStories from "../../components/LatestStories";
import React from "react";
import {ScrollingText} from "../../components/ScrollingText";

const HomePage = () => {
    return (
        <>
            <HomepageStyled>

                {/*first section*/}
                <HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh" tabletVerticalSectionHeight="30vh">
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
                <HomePageSectionStyled>
                    <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>
                    <TextOverlay>
                    <span>
                        Pure products with lots of identity and impact,
                        <b> both in taste and meaning.</b>
                    </span>
                    </TextOverlay>
                </HomePageSectionStyled>

                <HomePageSectionStyled>
                    <span>WE WORK WITH</span>
                    <WorkWithLink to="/professionals">professionals</WorkWithLink>
                    <WorkWithLink to="/companies">companies</WorkWithLink>
                    <WorkWithLink to="/enthusiasts">enthusiasts</WorkWithLink>
                </HomePageSectionStyled>

                {/*fourth section*/}
                <HomePageSectionStyled>
                    <BackPicture src={HomePageBoxes} alt="Boxes picture"/>
                    <TextOverlay>
                        <h2>BOXES</h2>
                        <h3>FOR YOU BIG COMPANIES</h3>
                    </TextOverlay>
                </HomePageSectionStyled>

                <h4>LATEST STORIES</h4>
                <LatestStories/>

            </HomepageStyled>
            <ScrollingText direction="left"/>
            <ScrollingText direction="right"/>

        </>
    )
}


export default HomePage;