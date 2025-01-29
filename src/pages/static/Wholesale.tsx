import {WholesaleStyled} from "../../components/styled/wholesale/Wholesale.styled";
import {WholesaleSection} from "../../components/styled/wholesale/WholesaleSection";
import TextOverlay from "../../components/styled/global/TextOverlay";
import React from "react";
import GetTheApp from "../../components/wholesale/GetTheApp";
import ContactUsPic from "../../assets/pictures/contact-us-wholesale.webp";
import BookingSection from "../../components/wholesale/BookingSection";
import AssortmentSection from "../../components/wholesale/AssortmentSection";
import WholesaleHeroSVG from "../../assets/svg/WholesaleHeroSVG";

const Wholesale = () => {
    return (
        <WholesaleStyled>
            <WholesaleSection>

                <WholesaleHeroSVG/>

                <TextOverlay>
                    <h2 id="h2-wholesale">Start Carnivalizing your menu here!</h2>
                    <p id="p-wholesale">
                        Step into our lush selection of handpicked ingredients, bursting with identity, powered by
                        nature.
                    </p>
                </TextOverlay>
            </WholesaleSection>


            <GetTheApp/>


            <WholesaleSection id="contactUsSection">

                <svg width="90vw" height="60vh" viewBox="0 0 1320 293" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="contactUs">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24 0C10.7452 0 0 10.7452 0 24V269C0 282.255 10.7451 293 24 293H581.472C593.071 293 601.017 280.735 600.185 269.166C600.062 267.46 600 265.737 600 264C600 224.788 631.788 193 671 193C710.212 193 742 224.788 742 264C742 265.737 741.938 267.46 741.815 269.166C740.983 280.735 748.928 293 760.528 293H1296C1309.25 293 1320 282.255 1320 269V24C1320 10.7452 1309.25 0 1296 0H24ZM706.722 293C712.118 293 717.314 290.347 719.497 285.412C722.392 278.864 724 271.62 724 264C724 234.729 700.271 211 671 211C641.729 211 618 234.729 618 264C618 271.62 619.608 278.864 622.503 285.412C624.686 290.347 629.882 293 635.278 293H706.722Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>
                    <image href={ContactUsPic} width="1320" height="293" clip-path="url(#contactUs)"
                           preserveAspectRatio="xMidYMid slice"/>

                    <rect x="648" y="238" width="48.5333" height="39" rx="6" fill="white"/>
                    <path d="M655.8 247.967L671.834 259.233L687.867 247.967" stroke="black" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" fill="none"/>

                </svg>

                <TextOverlay>
                    <p id="contactUsInfo">Weekdays from <span className="highlighted">9 am to 5 pm (CET)</span>, <span
                        className="highlighted">Robbe and Bert</span> are ready to help you, dear wholesale customer,
                        find what you seek from Carnivale’s assortment. <span className="highlighted">Simply subscribe to our app</span> and
                        we'll be in touch promptly.
                    </p>
                    <span id="phoneNumber">
                        +32 3 361 05 20
                    </span>
                </TextOverlay>

            </WholesaleSection>

            <BookingSection/>

            <AssortmentSection/>
        </WholesaleStyled>
    )
}

export default Wholesale;