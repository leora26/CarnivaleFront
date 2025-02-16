import HeroPicture from "../pictures/wholesale/wholesale-hero.jpg";
import React from "react";

const WholesaleHeroSVG = () => {
    return (
        <svg width="90vw" height="60vh" viewBox="0 0 1321 604" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="wholesaleFirstSection">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M24 21C10.7452 21 0 31.7452 0 45V568C0 581.255 10.7451 592 24 592H1187.05C1197.21 592 1203.05 578.091 1198.42 569.047C1193.04 558.535 1190 546.622 1190 534C1190 491.474 1224.47 457 1267 457C1278.37 457 1289.16 459.463 1298.87 463.885C1307.66 467.889 1320 462.198 1320 452.536V45C1320 31.7452 1309.25 21 1296 21H24ZM1320 534C1320 504.729 1296.27 481 1267 481C1237.73 481 1214 504.729 1214 534C1214 563.271 1237.73 587 1267 587C1296.27 587 1320 563.271 1320 534Z"
                          fill="#C4C4C4"/>
                </clipPath>
            </defs>

            <image href={HeroPicture} width="100%" height="100%" clipPath="url(#wholesaleFirstSection)"
                   preserveAspectRatio="xMidYMid slice"/>
            <path
                d="M1270 508.886V551.049L1283.23 535.749L1286.76 539.836L1267.5 562.114L1248.24 539.836L1251.77 535.749L1265 551.049V508.886H1270Z"
                fill="white"/>
        </svg>
    )
}

export default WholesaleHeroSVG;