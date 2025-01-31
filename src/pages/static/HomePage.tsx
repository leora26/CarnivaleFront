import React, {useEffect} from "react";
import {
    HomepageStyled,
} from "../../components/styled/homepage/Homepage.styled";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {HeroSection, HomePageSectionStyled, TextSection} from "../../components/styled/homepage/HomepageSection.styled";
import CategoryCard from "../../components/styled/homepage/CategoryCard";
import {ChangingTextContainer} from "../../components/styled/homepage/ChangingText.styled";

import LatestStories from "../../components/homepage/LatestStories";
import ChangingText from "../../components/global/ChangingText";
import WeWorkWithLink from "../../components/homepage/WeWorkWithLink";


import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"
import CurvedTextV2 from "../../components/homepage/CurvedTextV2";
import {useAnimation} from "framer-motion";
import HomepageHeroSVG from "../../assets/svg/HomepageHeroSVG";
import {HomepageParagraph} from "../../components/styled/homepage/HomepageParagraph";
import ConnectWithUsSVG from "../../assets/svg/ConnectWithUsSVG";

const sectionVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};


const HomePage = () => {
    const controls = useAnimation();
    useEffect(() => {
        controls.start("visible")
    }, [controls])


    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    return (
        <>
            <HomepageStyled>
                <ConnectWithUsSVG/>
                <HeroSection
                    href="#weWorkWithSection"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("weWorkWithSection")?.scrollIntoView({behavior: "smooth"});
                    }}
                    id="firstSection">

                    <HomepageHeroSVG/>

                    <TextOverlay>
                        <h1>CARNIVALE</h1>
                        <p>
                            Supplying ingredients to over 200 of the best kitchens in the Low Countries.
                        </p>
                    </TextOverlay>

                </HeroSection>


                <TextSection>
                    <HomepageParagraph>
                        The <span>ingredients</span> we offer are the most beautiful souvenirs of the encounters we have
                        with
                        farmers and producers across Europe. Sourcing ingredients is our passion, especially for foods
                        farmers and producers across Europe. Sourcing ingredients is our passion, especially for foods
                        that <span>reflect the craft and soul</span> of their makers.
                    </HomepageParagraph>
                    <HomepageParagraph>
                        Such products tell a story about the makers, their land, and their history, reminding us of
                        something we already carry in our hearts and ancient memory. Whenever we find that distinctive
                        'taste', it always also comes with <span>originality, seasonality, transparency, patience, and kindness.</span>
                    </HomepageParagraph>
                    <HomepageParagraph>
                        <span>A total lack of compromise</span> is key, always hoping that the choices we make reflect
                        who we
                        are and what we want to convey, so we can connect with those who recognize themselves in us.
                    </HomepageParagraph>
                </TextSection>

                <HomePageSectionStyled
                    direction="column"
                    tabletHorizontalSectionHeight="60vh"
                    tabletVerticalSectionHeight="30vh">

                    <ChangingTextContainer>
                        <ChangingText animationOrder={0} staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                        <ChangingText animationOrder={1} staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                        <ChangingText animationOrder={2} staticText="AIMING FOR" dynamicText={aimingForText}/>
                        <ChangingText animationOrder={3} staticText="OF INGREDIENTS BURSTING WITH "
                                      dynamicText={ingredientsText}/>
                    </ChangingTextContainer>

                </HomePageSectionStyled>

                <HomePageSectionStyled
                    direction="row">
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

                <HomePageSectionStyled
                    direction="column"
                    id="weWorkWithSection"
                >
                    <span id="workWithSpan">We work with</span>
                    <WeWorkWithLink link="/professionals">professionals</WeWorkWithLink>
                    <WeWorkWithLink link="/companies">companies</WeWorkWithLink>
                    <WeWorkWithLink link="/enthusiasts">enthusiasts</WeWorkWithLink>
                </HomePageSectionStyled>


                <h4>LATEST STORIES</h4>
                <LatestStories/>

            </HomepageStyled>



        </>
    )
}


export default HomePage;