import React from "react";
import {
    HomepageStyled,
    GetInTouchContainer
} from "../../components/styled/homepage/Homepage.styled";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {HomePageSectionStyled} from "../../components/styled/homepage/HomepageSection.styled";
import CategoryCard from "../../components/styled/homepage/CategoryCard";
import {ChangingTextContainer} from "../../components/styled/homepage/ChangingText.styled";

import LatestStories from "../../components/homepage/LatestStories";
import {ScrollingText} from "../../components/homepage/ScrollingText";
import ProductSection from "../../components/homepage/ProductSection";
import GetInTouch from "../../components/homepage/GetInTouch";
import ChangingText from "../../components/global/ChangingText";
import WeWorkWithLink from "../../components/homepage/WeWorkWithLink";


import HeroPicture from "../../assets/pictures/hero.png";
import HomePageBoxes from "../../assets/pictures/product-section.png"
import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"


const MobileHomePage = () => {
    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];




    return (
        <>
            <HomepageStyled>
                <HomePageSectionStyled
                    direction="column" className="first-section"
                >
                    <svg className="tabletSVGs" width="90vw" height="60vh" viewBox="0 0 343 520"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="firstSectionHomepageMobile">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M24 0C10.7452 0 0 10.7452 0 24V496C0 509.255 10.7452 520 24 520H240.114C250.008 520 256.151 506.489 253.285 497.018C251.799 492.107 251 486.897 251 481.5C251 451.953 274.953 428 304.5 428C309.897 428 315.107 428.799 320.018 430.285C329.489 433.151 343 427.008 343 417.114V24C343 10.7452 332.255 0 319 0H24ZM343 481.5C343 460.237 325.763 443 304.5 443C283.237 443 266 460.237 266 481.5C266 502.763 283.237 520 304.5 520C325.763 520 343 502.763 343 481.5Z"
                                      fill="#C4C4C4"/>
                            </clipPath>
                        </defs>
                        <image href={HeroPicture} width="100%" height="100%"
                               clip-path="url(#firstSectionHomepageMobile)"
                               preserveAspectRatio="xMidYMid slice"/>

                        <path
                            d="M290 490L312.372 474.012L298.12 471.232L298.651 467.389L319.402 471.437L316.512 492.382L312.705 491.639L314.69 477.255L292.318 493.243L290 490Z"
                            fill="white"/>


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

                <HomePageSectionStyled direction="column">
                    <h2 id="whatDoWeHave">what do we have?</h2>
                    <div id="categories">
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
                            <img src={PoultryCategory} alt="Poutry category link"/>
                            <h3>poultry</h3>
                            <p>
                                Free range is no joke
                            </p>
                        </CategoryCard>
                    </div>

                </HomePageSectionStyled>

                <HomePageSectionStyled id="weWorkWithContainer" direction="column">
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
                    direction="column"
                    className="first-section"
                >
                    <svg id="boxesPicture" width="379" height="640" viewBox="0 0 379 640" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="clipShape2">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M34 10C20.7452 10 10 20.7452 10 34V590C10 603.255 20.7452 614 34 614H329C342.255 614 353 603.255 353 590V590C353 580.648 338.765 574.888 330.094 578.393C323.906 580.894 317.143 582.271 310.058 582.271C280.51 582.271 256.558 558.318 256.558 528.771C256.558 499.224 280.51 475.271 310.058 475.271C315.773 475.271 321.279 476.167 326.444 477.827C336.527 481.068 353 474.249 353 463.658V34C353 20.7452 342.255 10 329 10H34ZM348.558 528.771C348.558 550.034 331.321 567.271 310.058 567.271C288.795 567.271 271.558 550.034 271.558 528.771C271.558 507.508 288.795 490.271 310.058 490.271C331.321 490.271 348.558 507.508 348.558 528.771Z"
                                      fill="#C4C4C4"/>
                            </clipPath>
                        </defs>
                        <g filter="url(#filter0_d_1854_5606)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M34 10C20.7452 10 10 20.7452 10 34V590C10 603.255 20.7452 614 34 614H329C342.255 614 353 603.255 353 590V590C353 580.648 338.765 574.888 330.094 578.393C323.906 580.894 317.143 582.271 310.058 582.271C280.51 582.271 256.558 558.318 256.558 528.771C256.558 499.224 280.51 475.271 310.058 475.271C315.773 475.271 321.279 476.167 326.444 477.827C336.527 481.068 353 474.249 353 463.658V34C353 20.7452 342.255 10 329 10H34ZM348.558 528.771C348.558 550.034 331.321 567.271 310.058 567.271C288.795 567.271 271.558 550.034 271.558 528.771C271.558 507.508 288.795 490.271 310.058 490.271C331.321 490.271 348.558 507.508 348.558 528.771Z"
                                  fill="#C4C4C4"/>
                        </g>
                        <image href={HomePageBoxes} width="100%" height="100%" clip-path="url(#clipShape2)"
                               preserveAspectRatio="xMidYMid slice"/>
                        <path
                            d="M293.783 527.366L321.274 526.769L311.069 516.439L313.672 513.564L328.532 528.604L314.34 544.276L311.613 541.516L321.36 530.754L293.869 531.351L293.783 527.366Z"
                            fill="white"/>
                        <defs>
                            <filter id="filter0_d_1854_5606" x="0.299999" y="0.299999" width="378.4" height="639.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="8" dy="8"/>
                                <feGaussianBlur stdDeviation="8.85"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1854_5606"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1854_5606"
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

            {/*<BackVideo src={HomePageVideo} autoPlay loop muted/>*/}
        </>
    )
}


export default MobileHomePage;