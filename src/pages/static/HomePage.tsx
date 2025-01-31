import React, {useEffect} from "react";
import {
    HomepageStyled,
} from "../../components/styled/homepage/Homepage.styled";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {HeroSection, HomePageSectionStyled, TextSection} from "../../components/styled/homepage/HomepageSection.styled";
import {ChangingTextContainer} from "../../components/styled/homepage/ChangingText.styled";

import LatestStories from "../../components/homepage/LatestStories";
import ChangingText from "../../components/global/ChangingText";
import WeWorkWithLink from "../../components/homepage/WeWorkWithLink";

import {useAnimation} from "framer-motion";
import HomepageHeroSVG from "../../assets/svg/HomepageHeroSVG";
import {HomepageParagraph} from "../../components/styled/homepage/HomepageParagraph";
import ConnectWithUsSVG from "../../assets/svg/ConnectWithUsSVG";
import CategoriesSection from "../../components/homepage/CategoriesSection";
import WeWorkWithSection from "../../components/homepage/WeWorkWithSection";
import ChangingTextSection from "../../components/homepage/ChangingTextSection";

const sectionVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};


const HomePage = () => {
    const controls = useAnimation();
    useEffect(() => {
        controls.start("visible")
    }, [controls])



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

                <ChangingTextSection/>

                <CategoriesSection />

                <WeWorkWithSection />

                <h4>LATEST STORIES</h4>
                <LatestStories/>

            </HomepageStyled>



        </>
    )
}


export default HomePage;