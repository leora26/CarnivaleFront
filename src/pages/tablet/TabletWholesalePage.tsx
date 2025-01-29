import {WholesaleSection} from "../../components/styled/wholesale/WholesaleSection";
import HeroPicture from "../../assets/pictures/wholesale-hero.jpg";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {HomepageParagraph} from "../../components/styled/homepage/HomepageParagraph";
import GetTheApp from "../../components/wholesale/GetTheApp";
import ContactUsPic from "../../assets/pictures/contact-us-wholesale.webp";
import BookingSection from "../../components/wholesale/BookingSection";
import AssortmentSection from "../../components/wholesale/AssortmentSection";
import {WholesaleStyled} from "../../components/styled/wholesale/Wholesale.styled";
import React from "react";

const TabletWholesalePage = () => {
    return (
        <WholesaleStyled>
            <WholesaleSection>
                <svg id="wholesaleFistSection" width="680" height="571" viewBox="0 0 680 571" fill="none"
                     xmlns="http://www.w3.org/2000/svg">

                    <defs>
                        <clipPath id="wholesaleFirstSection">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16 0C7.16344 0 0 7.16346 0 16V555C0 563.837 7.16344 571 16 571H563.042C573.127 571 579.184 557.049 575.441 547.684C572.576 540.515 571 532.692 571 524.5C571 489.982 598.982 462 633.5 462C641.692 462 649.515 463.576 656.684 466.441C666.049 470.184 680 464.127 680 454.042V16C680 7.16344 672.837 0 664 0H16ZM680 524.5C680 498.819 659.181 478 633.5 478C607.819 478 587 498.819 587 524.5C587 550.181 607.819 571 633.5 571C659.181 571 680 550.181 680 524.5Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>

                    <image href={HeroPicture} width="100%" height="100%" clipPath="url(#wholesaleFirstSection)"
                           preserveAspectRatio="xMidYMid slice"/>
                    <path
                        d="M636.089 498.514V533.344L647.14 520.705L650.092 524.082L634.001 542.485L617.91 524.082L620.862 520.705L631.913 533.344V498.514H636.089Z"
                        fill="white"/>
                </svg>


                <TextOverlay>
                    <h2 id="h2-wholesale">Start Carnivalizing your menu here!</h2>
                    <p id="p-wholesale">
                        Step into our lush selection of handpicked ingredients, bursting with identity, powered by
                        nature.
                    </p>
                </TextOverlay>
            </WholesaleSection>

            <WholesaleSection id="paragraphs">
                <HomepageParagraph>
                    The <span>ingredients</span> we offer are the most beautiful souvenirs of the encounters
                    we have with farmers and producers across Europe. Sourcing ingredients is our passion, especially
                    for foods
                    that <span>reflect the craft and soul</span> of their makers.
                </HomepageParagraph>

                <HomepageParagraph>
                    Such products tell a stories about the makers, their land, and their history,
                    reminding us of something we already carry in our hearts and ancient memory. Whenever we find that
                    distinctive ‘taste’, it always also comes with <span>originality, seasonality, transparency,patience,
                    and
                    kindness</span>.
                </HomepageParagraph>
                <HomepageParagraph>
                    <span>A total lack of compromise</span> is key, always hoping that the choices we make reflect who
                    we are and
                    what we want to convey, so we can connect with those who recognize themselves in us.
                </HomepageParagraph>

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

export default TabletWholesalePage;