import {
    BackVideo,
    GetInTouchContainer,
    HomepageStyled
} from "../../components/styled/homepage/Homepage.styled";
import {HomePageSectionStyled} from "../../components/styled/homepage/HomepageSection.styled";
import HeroPicture from "../../assets/pictures/homepage/hero.png";
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
import HomePageBoxesV2 from "../../assets/pictures/homepage-boxesV2.jpg"
import {ScrollingText} from "../../components/homepage/ScrollingText";
import GetInTouch from "../../components/homepage/GetInTouch";
import HomePageVideo from "../../assets/videos/homepage-video.mp4";
import React from "react";
import {useAnimation} from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const TabletHomePage = () => {
    const controls = useAnimation();

    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    return (
        <>
            <HomepageStyled>
                <HomePageSectionStyled
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    whileInView="visible"
                    viewport={{once: false, amount: 0.4}}
                    direction="column"
                    className="first-section">

                    <svg className="tabletSVGs" width="95vw" height="95vh" viewBox="0 0 550 540"
                         xmlns="http://www.w3.org/2000/svg">
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


                <HomePageSectionStyled
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    whileInView="visible"
                    viewport={{once: false, amount: 0.4}}
                    id="changingTextSection"
                    direction="column">
                    <ChangingTextContainer>
                        <ChangingText animationOrder={0} staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                        <ChangingText animationOrder={1} staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                        <ChangingText animationOrder={2} staticText="AIMING FOR" dynamicText={aimingForText}/>
                        <ChangingText animationOrder={3} staticText="INGREDIENTS BURSTING WITH "
                                      dynamicText={ingredientsText}/>
                    </ChangingTextContainer>
                </HomePageSectionStyled>

                <HomePageSectionStyled
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    whileInView="visible"
                    viewport={{once: false, amount: 0.4}}
                    id="whatDoWeHaveSection"
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

                <HomePageSectionStyled id="weWorkWithSection" direction="column">
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

                <HomePageSectionStyled
                    initial="hidden"
                    animate={controls}
                    variants={sectionVariants}
                    whileInView="visible"
                    viewport={{once: false, amount: 0.4}}
                    direction="column">

                    <svg className="tabletSVGs" width="95vw" height="95vh" viewBox="0 0 736 801" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2169_438)">
                            <image href={HomePageBoxesV2} width="100%" height="100%"
                                   clipPath="url(#homepageBoxesSectionTablet)"
                                   preserveAspectRatio="xMidYMid meet"/>
                        </g>

                        {/*Arrow*/}
                        <path
                            d="M621.455 653.911L660.506 653.383L645.863 640.047L649.522 636.381L670.844 655.8L650.898 675.777L646.986 672.214L660.685 658.495L621.633 659.023L621.455 653.911Z"
                            fill="white"/>
                        <defs>

                            <clipPath id="homepageBoxesSectionTablet">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M47 24C33.7452 24 23 34.7452 23 48V745C23 758.255 33.7452 769 47 769H679C692.255 769 703 758.255 703 745V732.346C703 721.741 687.219 715.536 677.757 720.327C668.066 725.235 657.106 728 645.5 728C606.012 728 574 695.988 574 656.5C574 617.012 606.012 585 645.5 585C657.106 585 668.066 587.765 677.757 592.673C687.219 597.464 703 591.259 703 580.654V48C703 34.7452 692.255 24 679 24H47ZM702 656.5C702 687.704 676.704 713 645.5 713C614.296 713 589 687.704 589 656.5C589 625.296 614.296 600 645.5 600C676.704 600 702 625.296 702 656.5Z"
                                      fill="#C4C4C4"/>
                            </clipPath>

                            <filter id="filter0_d_2169_438" x="0.299999" y="0.299999" width="735.4" height="800.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="5" dy="4"/>
                                <feGaussianBlur stdDeviation="13.85"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2169_438"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2169_438"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>

                    <TextOverlay>
                        <h2>BOXES</h2>
                        <h3>For your company</h3>
                    </TextOverlay>
                </HomePageSectionStyled>

            </HomepageStyled>
            <GetInTouchContainer>
                <ScrollingText direction="left" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
                <ScrollingText direction="right" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
            </GetInTouchContainer>

            <BackVideo src={HomePageVideo} autoPlay loop muted/>

        </>
    )
}

export default TabletHomePage;