import React from "react";
import HeroPicture from "../pictures/wholesale/wholesale-hero.jpg";

const WholesaleTabletHero = () => {
    return (
        <svg width="680" height="571" viewBox="0 0 680 571" fill="none" xmlns="http://www.w3.org/2000/svg">

            <image href={HeroPicture} width="100%" height="100%" clipPath="url(#wholesaleFirstSection)"
                   preserveAspectRatio="xMidYMid slice"/>

            <path
                d="M636.089 498.514V533.344L647.14 520.705L650.092 524.082L634.001 542.485L617.91 524.082L620.862 520.705L631.913 533.344V498.514H636.089Z"
                fill="white"/>

            <defs>
                <clipPath id="wholesaleFirstSection">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M16 0C7.16344 0 0 7.16346 0 16V555C0 563.837 7.16344 571 16 571H563.042C573.127 571 579.184 557.049 575.441 547.684C572.576 540.515 571 532.692 571 524.5C571 489.982 598.982 462 633.5 462C641.692 462 649.515 463.576 656.684 466.441C666.049 470.184 680 464.127 680 454.042V16C680 7.16344 672.837 0 664 0H16ZM680 524.5C680 498.819 659.181 478 633.5 478C607.819 478 587 498.819 587 524.5C587 550.181 607.819 571 633.5 571C659.181 571 680 550.181 680 524.5Z"
                          fill="#C4C4C4"/>
                </clipPath>
            </defs>
        </svg>

    )
}

export default WholesaleTabletHero;