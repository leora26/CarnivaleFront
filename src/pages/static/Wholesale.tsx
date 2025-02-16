import {WholesaleStyled} from "../../components/styled/wholesale/Wholesale.styled";
import {WholeSaleHeroSection} from "../../components/styled/wholesale/WholesaleHeroSection";
import {TextOverlay, WholesaleOverlay} from "../../components/styled/global/TextOverlay";
import React from "react";
import WholesaleHeroSVG from "../../assets/svg/WholesaleHeroSVG";
import {ParagraphButton, TextSection, WholesaleParagraph} from "../../components/styled/wholesale/WholesaleParagraph";
import {IoArrowForward} from "react-icons/io5";
import ManEatingRibs from "../../assets/pictures/wholesale/N1060008.jpg"
import GuysInForest from "../../assets/pictures/wholesale/native_cooking_awards_015_©_kris_vlegels_0031.jpg"
import GetTheApp from "../../components/wholesale/GetTheApp";
import BecomeCustomerSection from "../../components/wholesale/BecomeCustomerSection";

const Wholesale = () => {
    return (
        <WholesaleStyled>
            <WholeSaleHeroSection>
                <WholesaleHeroSVG/>

                <TextOverlay>
                    <WholesaleOverlay>
                        <h2>Start Carnivalizing your menu here!</h2>
                        <p>
                            Step into our lush selection of handpicked ingredients, bursting with identity, powered by
                            nature.
                        </p>
                    </WholesaleOverlay>
                </TextOverlay>
            </WholeSaleHeroSection>

            <h3>WE EXIST TO SUPPORT KITCHENS</h3>

            <WholesaleParagraph>

                <TextSection>
                    <span>MONTHLY INSIGHTS</span>
                    <p>
                        Our bespoke monthly reports designed helping you to plan your menu weeks in advance.
                        Our updates spotlight ingredients at their peak quality and abundance while keeping you informed
                        about upcoming seasonal shifts. Backed by insightful data on seasonal trends, it equips your
                        entire team with the knowledge to become true experts
                    </p>
                    <ParagraphButton>
                        <button>
                            Subscribe to our newsletter
                        </button>
                        <IoArrowForward/>
                    </ParagraphButton>
                </TextSection>

                <img src={ManEatingRibs} alt="" className="paragraphImage"/>

            </WholesaleParagraph>


            <WholesaleParagraph>

                <img src={GuysInForest} alt="" className="paragraphImage"/>
                <TextSection>
                    <span>Menu consulting</span>
                    <p>
                        As your trusted seafood partner, we’re committed to supporting you and your
                        team at every step. That’s why we provide a complimentary, in-house
                        consulting service tailored for your kitchen team and pace. Together, we’ll strike the perfect
                        balance between consistency, cost, and quality to meet your unique requirements week after week.
                    </p>
                    <ParagraphButton>
                        <button>
                            Get in touch
                        </button>
                        <IoArrowForward/>
                    </ParagraphButton>
                </TextSection>


            </WholesaleParagraph>

            <GetTheApp/>

            <WholesaleParagraph>

                <TextSection>
                    <span>Tasting by crnvl</span>
                    <p>
                        Just like you, we speak the language of food, and we believe the true meaning of our ingredients
                        is best communicated by tasting them. Therefor we created the only logical place we could think
                        of to start a dialogue with you about food - a kitchen. Feel free to reach out if you would like
                        to take a seat in our kitchen and explore our assortment in depth.
                    </p>
                    <ParagraphButton>
                        <button>
                            Contact us
                        </button>
                        <IoArrowForward/>
                    </ParagraphButton>
                </TextSection>

                <img src={GuysInForest} alt="" className="paragraphImage"/>

            </WholesaleParagraph>

            <BecomeCustomerSection />

        </WholesaleStyled>
    )
}

export default Wholesale;