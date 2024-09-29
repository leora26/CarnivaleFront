import React from "react";
import {
    BackPicture,
    HomepageStyled,
    BackVideo, GetInTouchContainer
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
import HomePageBoxes from "../../assets/pictures/homepage-boxes.png"
import BeefCategory from "../../assets/pictures/category-beef.png"
import DairyCategory from "../../assets/pictures/category-dairy.png"
import PoultryCategory from "../../assets/pictures/category-poultry.png"
import HomePageVideo from "../../assets/videos/homepage-video.mp4"
import CurvedTextV2 from "../../components/homepage/CurvedTextV2";


const HomePage = () => {
    const weSeekForText: string[] = ["FARMERS", "PRODUCERS", "HEROES", "PROTAGONISTS", "PEOPLE WITH IMPACT"];
    const offerText: string[] = ["CHEF", "ENTHUSIASTS", "HOMECHEFS", "YOU"];
    const aimingForText: string[] = ["Awareness", "Wise", "Natural", "Seasonal", "Tradition", "Culture ", "Craft", "Sustainability"];
    const ingredientsText: string[] = ["identity", "taste", "happiness", "impact", "personality", "satisfaction ", "transparency", "value"];

    return (
        <>
            <HomepageStyled>
                <HomePageSectionStyled tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh" direction="column" className="first-section">

                    <svg className="tabletSVGs" width="90vw" height="60vh" viewBox="0 0 1340 490"
                         xmlns="http://www.w3.org/2000/svg">
                        <image href={HeroPicture} width="100%" height="100%" clipPath="url(#homepageFirstSection)"
                               preserveAspectRatio="xMidYMid slice"/>
                        <g filter="url(#filter0_d_2129_429)">
                            <mask id="path-1-inside-1_2129_429" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M36 12C22.7452 12 12 22.7452 12 36V462C12 475.255 22.7451 486 36 486H1160.9C1179.73 486 1191.95 459.75 1188.46 441.239C1187.5 436.14 1187 430.879 1187 425.5C1187 378.832 1224.83 341 1271.5 341C1276.88 341 1282.14 341.503 1287.24 342.463C1305.75 345.95 1332 333.733 1332 314.897V36C1332 22.7452 1321.25 12 1308 12H36ZM1332 425.5C1332 392.087 1304.91 365 1271.5 365C1238.09 365 1211 392.087 1211 425.5C1211 458.913 1238.09 486 1271.5 486C1304.91 486 1332 458.913 1332 425.5Z"/>
                            </mask>
                            {/*Arrow*/}
                            <path
                                d="M1244 423.84H1289.15L1272.77 409.761L1277.14 406L1301 426.5L1277.14 447L1272.77 443.239L1289.15 429.16H1244V423.84Z"
                                fill="white"/>
                            {/*Connect*/}
                            <path
                                d="M1153.16 440.556C1153.13 439.842 1153.19 439.188 1153.35 438.592C1153.51 437.996 1153.75 437.492 1154.06 437.081C1154.35 436.67 1154.67 436.333 1155 436.071C1155.32 435.797 1155.67 435.571 1156.05 435.391L1156.13 436.893C1155.56 437.2 1155.11 437.667 1154.78 438.293C1154.44 438.908 1154.3 439.648 1154.35 440.51C1154.41 441.672 1154.87 442.646 1155.73 443.434C1156.6 444.222 1157.74 444.579 1159.17 444.505C1160.48 444.437 1161.56 443.974 1162.41 443.118C1163.25 442.252 1163.64 441.196 1163.58 439.949C1163.53 439.076 1163.3 438.346 1162.89 437.758C1162.46 437.161 1161.9 436.731 1161.22 436.467L1161.14 434.965C1163.43 435.903 1164.64 437.566 1164.76 439.952C1164.85 441.613 1164.37 442.995 1163.33 444.096C1162.28 445.198 1160.91 445.792 1159.22 445.88C1157.56 445.966 1156.16 445.5 1155.02 444.481C1153.86 443.462 1153.25 442.154 1153.16 440.556Z"
                                fill="white"/>
                            <path
                                d="M1160.5 427.234C1159.33 427.126 1158.4 426.648 1157.71 425.802C1157.01 424.944 1156.71 423.936 1156.82 422.778C1156.93 421.599 1157.4 420.663 1158.25 419.971C1159.1 419.268 1160.1 418.97 1161.26 419.077C1162.39 419.183 1163.33 419.66 1164.05 420.51C1164.77 421.359 1165.08 422.368 1164.97 423.536C1164.87 424.694 1164.38 425.629 1163.52 426.342C1162.67 427.044 1161.66 427.342 1160.5 427.234ZM1160.62 425.928C1161.46 426.006 1162.19 425.8 1162.8 425.311C1163.41 424.811 1163.76 424.184 1163.83 423.43C1163.9 422.633 1163.68 421.948 1163.17 421.376C1162.65 420.792 1161.98 420.462 1161.14 420.384C1160.31 420.307 1159.59 420.502 1158.98 420.97C1158.37 421.428 1158.02 422.065 1157.95 422.883C1157.87 423.69 1158.09 424.38 1158.59 424.952C1159.1 425.523 1159.77 425.849 1160.62 425.928Z"
                                fill="white"/>
                            <path
                                d="M1166.25 412.148L1158.77 410.476L1159.05 409.242L1159.99 409.452L1159.99 409.421C1159.34 408.63 1159.12 407.755 1159.33 406.798C1159.51 406.006 1159.94 405.381 1160.62 404.921C1161.3 404.449 1162.21 404.342 1163.37 404.6L1167.72 405.574L1167.45 406.807L1163.17 405.851C1162.42 405.684 1161.8 405.726 1161.32 405.979C1160.84 406.221 1160.53 406.639 1160.4 407.233C1160.25 407.92 1160.36 408.512 1160.73 409.01C1161.09 409.495 1161.69 409.833 1162.55 410.024L1166.53 410.914L1166.25 412.148Z"
                                fill="white"/>
                            <path
                                d="M1169.75 398.555L1162.53 395.98L1162.95 394.789L1163.86 395.112L1163.87 395.082C1163.32 394.217 1163.21 393.322 1163.54 392.398C1163.81 391.634 1164.31 391.066 1165.04 390.693C1165.77 390.307 1166.69 390.313 1167.81 390.711L1172.01 392.211L1171.59 393.401L1167.46 391.928C1166.73 391.67 1166.12 391.637 1165.61 391.829C1165.1 392.01 1164.75 392.387 1164.54 392.96C1164.3 393.623 1164.34 394.224 1164.65 394.764C1164.94 395.29 1165.51 395.7 1166.33 395.993L1170.17 397.364L1169.75 398.555Z"
                                fill="white"/>
                            <path
                                d="M1169.27 379.007C1169.57 378.416 1169.95 377.949 1170.41 377.607C1170.87 377.264 1171.34 377.06 1171.83 376.994C1172.32 376.919 1172.79 376.919 1173.26 376.997C1173.71 377.069 1174.14 377.206 1174.54 377.407C1174.72 377.498 1174.85 377.577 1174.94 377.644L1172.13 383.234C1172.75 383.545 1173.42 383.578 1174.14 383.331C1174.85 383.079 1175.37 382.629 1175.69 381.981C1176.05 381.276 1176.07 380.551 1175.75 379.806L1176.4 378.505C1176.77 379.026 1177.01 379.634 1177.11 380.331C1177.21 381.013 1177.08 381.722 1176.71 382.455C1176.17 383.533 1175.37 384.23 1174.32 384.548C1173.27 384.856 1172.2 384.739 1171.13 384.198C1170.14 383.705 1169.46 382.969 1169.08 381.991C1168.7 381.012 1168.77 380.018 1169.27 379.007ZM1170.26 379.503C1169.95 380.122 1169.9 380.735 1170.11 381.341C1170.31 381.943 1170.67 382.411 1171.19 382.746L1173.41 378.328C1172.82 378.103 1172.22 378.094 1171.62 378.303C1171.01 378.502 1170.56 378.902 1170.26 379.503Z"
                                fill="white"/>
                            <path
                                d="M1176.93 365.848C1177.47 365.032 1178.1 364.514 1178.81 364.295C1179.52 364.062 1180.15 364.033 1180.7 364.207L1179.92 365.379C1179.1 365.257 1178.41 365.618 1177.85 366.461C1177.42 367.1 1177.28 367.781 1177.43 368.506C1177.56 369.225 1178.02 369.848 1178.81 370.375C1179.53 370.854 1180.27 371.034 1181.03 370.913C1181.8 370.783 1182.41 370.38 1182.86 369.706C1183.4 368.89 1183.44 368.079 1182.96 367.274L1183.74 366.103C1184.17 366.671 1184.42 367.322 1184.48 368.056C1184.54 368.789 1184.31 369.551 1183.78 370.341C1183.12 371.335 1182.25 371.938 1181.19 372.151C1180.11 372.357 1179.08 372.126 1178.07 371.458C1177.11 370.818 1176.52 369.976 1176.28 368.932C1176.04 367.879 1176.26 366.851 1176.93 365.848Z"
                                fill="white"/>
                            <path
                                d="M1184.15 358.152L1183.35 357.474L1183.99 356.701L1182.12 355.128L1182.93 354.16L1184.81 355.733L1186.12 354.164L1186.93 354.842L1185.61 356.412L1188.72 359.013C1189.17 359.397 1189.55 359.595 1189.85 359.607C1190.14 359.603 1190.43 359.438 1190.7 359.112C1190.9 358.875 1191.07 358.61 1191.2 358.318L1192 358.987C1191.87 359.3 1191.66 359.637 1191.36 359.997C1190.81 360.65 1190.25 360.942 1189.68 360.87C1189.12 360.799 1188.51 360.492 1187.87 359.951L1184.8 357.38L1184.15 358.152Z"
                                fill="white"/>
                            {/*Connect*/}
                            {/*With*/}
                            <path
                                d="M1208.24 343.634L1204.55 340.784C1204.14 340.456 1203.71 340.091 1203.25 339.69L1203.2 339.73C1203.57 340.364 1203.88 340.962 1204.14 341.522L1205.95 345.454L1204.66 346.479L1198.32 341.731L1199.32 340.935L1203.4 344.148C1203.85 344.511 1204.25 344.842 1204.6 345.14L1204.65 345.1C1204.51 344.841 1204.27 344.347 1203.94 343.618L1201.79 338.975L1202.86 338.119L1206.97 341.29C1207.33 341.566 1207.74 341.898 1208.19 342.284L1208.23 342.254C1207.96 341.79 1207.72 341.334 1207.51 340.885L1205.33 336.159L1206.32 335.373L1209.51 342.629L1208.24 343.634Z"
                                fill="white"/>
                            <path
                                d="M1217.35 337.217L1213.3 330.712L1214.37 330.044L1218.43 336.549L1217.35 337.217ZM1212.21 329.226L1211.42 327.963L1212.75 327.134L1213.54 328.398L1212.21 329.226Z"
                                fill="white"/>
                            <path
                                d="M1221.42 327.164L1220.95 326.222L1221.84 325.766L1220.74 323.583L1221.86 323.011L1222.97 325.194L1224.8 324.268L1225.28 325.21L1223.45 326.136L1225.28 329.746C1225.55 330.279 1225.82 330.609 1226.09 330.736C1226.36 330.849 1226.69 330.809 1227.07 330.616C1227.34 330.476 1227.6 330.298 1227.84 330.082L1228.31 331.01C1228.07 331.25 1227.74 331.476 1227.32 331.688C1226.56 332.074 1225.94 332.123 1225.44 331.835C1224.95 331.547 1224.51 331.027 1224.13 330.275L1222.32 326.708L1221.42 327.164Z"
                                fill="white"/>
                            <path
                                d="M1235.13 327.974L1231.08 317.191L1232.26 316.746L1233.96 321.254L1233.99 321.243C1234.3 320.259 1234.91 319.596 1235.82 319.254C1236.58 318.969 1237.33 318.98 1238.09 319.289C1238.85 319.595 1239.45 320.306 1239.87 321.424L1241.44 325.603L1240.25 326.048L1238.71 321.929C1238.44 321.22 1238.07 320.733 1237.59 320.468C1237.13 320.199 1236.61 320.171 1236.04 320.385C1235.38 320.633 1234.94 321.043 1234.72 321.615C1234.52 322.183 1234.57 322.876 1234.87 323.695L1236.32 327.529L1235.13 327.974Z"
                                fill="white"/>
                            {/*With*/}
                            {/*Us*/}
                            <path
                                d="M1262.36 312.839L1263.56 320.408L1262.31 320.607L1262.17 319.674L1262.13 319.679C1261.67 320.574 1260.97 321.096 1260.03 321.245C1259.27 321.368 1258.55 321.201 1257.88 320.746C1257.22 320.278 1256.8 319.459 1256.62 318.29L1255.91 313.866L1257.16 313.667L1257.85 317.997C1257.97 318.755 1258.23 319.314 1258.62 319.672C1259.02 320.03 1259.5 320.164 1260.06 320.075C1260.72 319.969 1261.2 319.66 1261.5 319.149C1261.81 318.635 1261.89 317.947 1261.75 317.083L1261.11 313.038L1262.36 312.839Z"
                                fill="white"/>
                            <path
                                d="M1275.75 313.646L1274.47 313.702C1274.4 313.406 1274.24 313.168 1273.99 312.986C1273.76 312.804 1273.5 312.72 1273.2 312.733C1272.82 312.749 1272.53 312.864 1272.32 313.076C1272.11 313.277 1272.02 313.522 1272.03 313.809C1272.04 314.076 1272.16 314.311 1272.38 314.515C1272.61 314.707 1273.05 314.891 1273.7 315.065C1275.2 315.48 1275.98 316.262 1276.03 317.413C1276.06 318.116 1275.85 318.692 1275.4 319.138C1274.95 319.575 1274.33 319.81 1273.54 319.845C1272.73 319.88 1272.09 319.7 1271.61 319.305C1271.14 318.899 1270.82 318.347 1270.66 317.649L1271.94 317.593C1272.15 318.406 1272.69 318.793 1273.54 318.756C1273.95 318.738 1274.26 318.617 1274.47 318.394C1274.69 318.172 1274.79 317.895 1274.77 317.565C1274.76 317.213 1274.63 316.93 1274.38 316.717C1274.14 316.493 1273.67 316.283 1272.99 316.089C1272.26 315.887 1271.71 315.606 1271.35 315.248C1271 314.89 1270.81 314.424 1270.78 313.848C1270.75 313.262 1270.94 312.763 1271.34 312.35C1271.75 311.926 1272.33 311.698 1273.09 311.665C1274.48 311.603 1275.37 312.264 1275.75 313.646Z"
                                fill="white"/>
                            {/*Us*/}
                        </g>


                        <defs>
                            <filter id="filter0_d_2129_429" x="0.799999" y="0.799999" width="1360.4" height="515.4"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix"
                                               values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dx="9" dy="9"/>
                                <feGaussianBlur stdDeviation="10.1"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2129_429"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2129_429"
                                         result="shape"/>
                            </filter>

                            <clipPath id="homepageFirstSection">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M36 12C22.7452 12 12 22.7452 12 36V462C12 475.255 22.7451 486 36 486H1160.9C1179.73 486 1191.95 459.75 1188.46 441.239C1187.5 436.14 1187 430.879 1187 425.5C1187 378.832 1224.83 341 1271.5 341C1276.88 341 1282.14 341.503 1287.24 342.463C1305.75 345.95 1332 333.733 1332 314.897V36C1332 22.7452 1321.25 12 1308 12H36ZM1332 425.5C1332 392.087 1304.91 365 1271.5 365C1238.09 365 1211 392.087 1211 425.5C1211 458.913 1238.09 486 1271.5 486C1304.91 486 1332 458.913 1332 425.5Z"
                                      fill="#D9D9D9"/>
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


                <HomePageSectionStyled direction="column" tabletHorizontalSectionHeight="60vh"
                                       tabletVerticalSectionHeight="30vh">
                    <ChangingTextContainer>
                        <ChangingText staticText="WE SEEK FOR" dynamicText={weSeekForText}/>
                        <ChangingText staticText="GLADLY OFFER IT TO" dynamicText={offerText}/>
                        <ChangingText staticText="AIMING FOR" dynamicText={aimingForText}/>
                        <ChangingText staticText="INGREDIENTS BURSTING WITH " dynamicText={ingredientsText}/>
                    </ChangingTextContainer>
                </HomePageSectionStyled>

                <HomePageSectionStyled direction="row">
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

                <HomePageSectionStyled direction="column">
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

                <HomePageSectionStyled direction="column">
                    <BackPicture src={HomePageBoxes} alt="Boxes picture"/>
                    <TextOverlay>
                        <h2>BOXES</h2>
                        <h3>For your company</h3>
                    </TextOverlay>
                </HomePageSectionStyled>
                {/*<HomePageSectionStyled sectionHeight="80vh" tabletHorizontalSectionHeight="60vh"*/}
                {/*                       tabletVerticalSectionHeight="30vh" direction="column">*/}
                {/*    <BackPicture src={BookingPicture} alt="Booking picture"/>*/}
                {/*    <TextOverlay>*/}
                {/*        <h1 id="booking-heading">BOOK AN EVENT WITH US</h1>*/}
                {/*        <input type="date"/>*/}
                {/*    </TextOverlay>*/}
                {/*</HomePageSectionStyled>*/}

            </HomepageStyled>
            <GetInTouchContainer>
                <ScrollingText direction="left" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
                <ScrollingText direction="right" backgroundColor="white">
                    <GetInTouch/>
                </ScrollingText>
            </GetInTouchContainer>


            {/*<HomepageStyled>*/}
            {/*    <HomePageSectionStyled direction="column">*/}
            {/*        <BackPicture src={Hero2Picture} alt="Hero picture number 2"/>*/}
            {/*        <TextOverlay>*/}
            {/*        <span>*/}
            {/*            Pure products with lots of identity and impact,*/}
            {/*            both in <b>  taste and meaning.</b>*/}
            {/*        </span>*/}
            {/*        </TextOverlay>*/}
            {/*    </HomePageSectionStyled>*/}
            {/*</HomepageStyled>*/}

            <BackVideo src={HomePageVideo} autoPlay loop muted/>

        </>
    )
}


export default HomePage;