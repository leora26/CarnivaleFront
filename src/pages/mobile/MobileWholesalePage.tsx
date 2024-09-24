import React from "react";
import {WholesaleStyled} from "../../components/styled/wholesale/Wholesale.styled";
import HeroPicture from "../../assets/pictures/wholesale-hero.jpg";
import TextOverlay from "../../components/styled/global/TextOverlay";
import {ExploreArrow} from "../../components/styled/homepage/Homepage.styled";
import {IoArrowForward} from "react-icons/io5";
import {WholesaleSection} from "../../components/styled/wholesale/WholesaleSection";
import {WholesaleParagraph} from "../../components/styled/wholesale/WholesaleParagraph";
import GetTheApp from "../../components/wholesale/GetTheApp";
import ContactUsPic from "../../assets/pictures/contact-us-wholesale.webp";
import BookingSection from "../../components/wholesale/BookingSection";
import AssortmentSection from "../../components/wholesale/AssortmentSection";

const MobileWholesalePage = () => {
    return (
        <WholesaleStyled>
            <WholesaleSection id="first-section">
                <svg width="90vw" height="60vh" viewBox="0 0 345 571" xmlns="http://www.w3.org/2000/svg">

                    <defs>
                        <clipPath id="clip0">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24 0C10.7452 0 0 10.7452 0 24V547C0 560.255 10.7452 571 24 571H321C334.255 571 345 560.255 345 547V545.886C345 535.992 331.489 529.849 322.018 532.715C317.107 534.201 311.897 535 306.5 535C276.953 535 253 511.047 253 481.5C253 451.953 276.953 428 306.5 428C311.897 428 317.107 428.799 322.018 430.285C331.489 433.151 345 427.008 345 417.114V24C345 10.7452 334.255 0 321 0H24ZM345 481.5C345 460.237 327.763 443 306.5 443C285.237 443 268 460.237 268 481.5C268 502.763 285.237 520 306.5 520C327.763 520 345 502.763 345 481.5Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>

                    <image href={HeroPicture} width="100%" height="100%" clip-path="url(#clip0)"
                           preserveAspectRatio="xMidYMid slice"/>
                    <g clip-path="url(#clip0)">
                        <path
                            d="M308.619 465.937L309.361 493.424L319.637 483.165L322.525 485.754L307.563 500.692L291.818 486.582L294.563 483.841L305.377 493.532L304.635 466.044L308.619 465.937Z"
                            fill="white"/>
                    </g>
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
                <WholesaleParagraph>
                    The <span>ingredients</span> we offer are the most beautiful souvenirs of the encounters
                    we have with farmers and producers across Europe. Sourcing ingredients is our passion, especially
                    for foods
                    that <span>reflect the craft and soul</span> of their makers.
                </WholesaleParagraph>

                <WholesaleParagraph>
                    Such products tell a stories about the makers, their land, and their history,
                    reminding us of something we already carry in our hearts and ancient memory. Whenever we find that
                    distinctive ‘taste’, it always also comes with <span>originality, seasonality, transparency,patience,
                    and
                    kindness</span>.
                </WholesaleParagraph>
                <WholesaleParagraph>
                    <span>A total lack of compromise</span> is key, always hoping that the choices we make reflect who
                    we are and
                    what we want to convey, so we can connect with those who recognize themselves in us.
                </WholesaleParagraph>

                <svg width="264" height="263" viewBox="0 0 164 163" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M76.5 142.5C106.323 142.5 130.5 118.323 130.5 88.5C130.5 58.6766 106.323 34.5 76.5 34.5C46.6766 34.5 22.5 58.6766 22.5 88.5C22.5 118.323 46.6766 142.5 76.5 142.5Z"
                        fill="black" stroke="white" stroke-width="27"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M76.5 129C98.8675 129 117 110.868 117 88.5C117 66.1325 98.8675 48 76.5 48C54.1325 48 36 66.1325 36 88.5C36 110.868 54.1325 129 76.5 129Z"
                          fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M56.25 77.4326V100.366C56.25 101.614 57.1632 102.625 58.4213 102.625H94.2129C95.4697 102.625 96.3842 101.602 96.3842 100.366V77.4326C96.3842 76.0635 95.5664 75 94.2129 75H58.4213C57.0156 75 56.25 76.0896 56.25 77.4326ZM59.5501 79.4302C59.5501 78.8775 59.8845 78.5614 60.4189 78.5614C60.7494 78.5614 73.7551 86.8025 74.5429 87.2859L76.5784 88.5518C77.2238 88.1194 77.8718 87.7497 78.5407 87.3015C79.9059 86.4288 92.0533 78.5614 92.3878 78.5614C92.9234 78.5614 93.2565 78.8775 93.2565 79.4302C93.2565 80.0155 92.1291 80.5968 91.3949 81.045C86.7818 83.8564 82.17 86.9214 77.6026 89.8374C77.3361 90.0177 76.8201 90.4031 76.4334 90.3443C76.0022 90.2776 62.7679 81.7753 60.3601 80.3591C59.9982 80.1461 59.5501 79.9515 59.5501 79.4302Z"
                          fill="white"/>
                    <path
                        d="M18.1956 89.1098C18.1474 88.3073 18.2113 87.5701 18.3873 86.8983C18.5633 86.2266 18.8237 85.6579 19.1684 85.1924C19.5011 84.7276 19.8508 84.3459 20.2176 84.0474C20.5836 83.7369 20.9768 83.4788 21.3972 83.2732L21.4987 84.9622C20.8586 85.3132 20.3555 85.8424 19.9893 86.5496C19.6223 87.2449 19.468 88.0776 19.5263 89.0479C19.6048 90.3535 20.1333 91.4458 21.1117 92.3247C22.0902 93.2035 23.382 93.5947 24.9871 93.4983C26.4605 93.4097 27.6729 92.88 28.6244 91.9092C29.5631 90.9271 29.9904 89.7353 29.9062 88.3339C29.8471 87.3516 29.5815 86.5321 29.1092 85.8752C28.6243 85.2071 27.9944 84.7281 27.2196 84.438L27.1181 82.7491C29.7048 83.7837 31.0788 85.6427 31.2401 88.3258C31.3524 90.1945 30.8269 91.7528 29.6637 93.0008C28.4885 94.2496 26.9546 94.9308 25.062 95.0446C23.1934 95.1569 21.6118 94.6448 20.3173 93.5085C19.0108 92.3728 18.3036 90.9066 18.1956 89.1098Z"
                        fill="black"/>
                    <path
                        d="M31.4055 78.8743L18.7949 75.8851L19.1229 74.5014L24.3948 75.7511L24.4031 75.7161C23.6818 74.8051 23.447 73.8184 23.6989 72.7558C23.9093 71.8684 24.3955 71.1697 25.1577 70.6598C25.9226 70.1381 26.959 70.0323 28.2667 70.3423L33.1533 71.5007L32.8253 72.8843L28.0088 71.7426C27.1798 71.5461 26.4919 71.5865 25.9452 71.8639C25.4012 72.1296 25.0504 72.5952 24.8926 73.2608C24.7099 74.0314 24.8171 74.6981 25.214 75.2608C25.6136 75.8119 26.2922 76.2009 27.2497 76.4278L31.7334 77.4907L31.4055 78.8743Z"
                        fill="black"/>
                    <path
                        d="M28.8172 59.9603C29.1681 59.3042 29.6063 58.7901 30.1319 58.418C30.6575 58.0459 31.1949 57.8298 31.7442 57.7697C32.2991 57.699 32.8355 57.7137 33.3535 57.8138C33.861 57.9083 34.3369 58.0744 34.7813 58.312C34.9824 58.4196 35.1302 58.5122 35.2247 58.5899L31.9057 64.7962C32.5935 65.164 33.3463 65.2196 34.164 64.9629C34.9711 64.7005 35.567 64.2095 35.9519 63.4899C36.3706 62.7069 36.4118 61.892 36.0753 61.0453L36.8478 59.6008C37.2501 60.197 37.4996 60.8884 37.5961 61.6748C37.6877 62.4451 37.5157 63.2376 37.0799 64.0524C36.4405 65.2481 35.523 66.0095 34.3276 66.3364C33.1378 66.6527 31.9451 66.4911 30.7493 65.8516C29.6594 65.2687 28.9149 64.4216 28.5159 63.3101C28.1169 62.1985 28.2174 61.0819 28.8172 59.9603ZM29.9125 60.546C29.5446 61.2338 29.4694 61.9216 29.6867 62.6094C29.8935 63.2915 30.2868 63.8284 30.8666 64.2201L33.4895 59.3154C32.8312 59.045 32.1582 59.0185 31.4704 59.2358C30.7883 59.4426 30.269 59.8793 29.9125 60.546Z"
                        fill="black"/>
                    <path
                        d="M35.278 52.9156L34.3809 52.1367L35.1952 51.1989L34.0262 50.184C33.3285 49.5783 32.9434 48.9419 32.8708 48.2751C32.797 47.5912 33.0513 46.9141 33.6334 46.2435C33.8694 45.9717 34.1378 45.7358 34.4384 45.536L35.3355 46.3148C35.0742 46.4694 34.8255 46.6826 34.5895 46.9544C34.2905 47.2987 34.1705 47.6475 34.2295 48.0006C34.2793 48.3458 34.4855 48.6758 34.848 48.9905L36.1392 50.1115L37.4373 48.6164L38.3344 49.3953L37.0363 50.8904L42.6498 55.7641L41.7057 56.8514L36.0922 51.9777L35.278 52.9156Z"
                        fill="black"/>
                    <path
                        d="M47.6555 42.448C47.6381 42.7625 47.5925 43.1887 47.5188 43.7268C47.445 44.2648 47.4548 44.7243 47.5482 45.1054C47.6343 45.4769 47.8297 45.8634 48.1343 46.2649L47.0876 47.0593C46.6669 46.5048 46.3785 46.0157 46.2225 45.5917C46.0665 45.1678 46.0095 44.6461 46.0516 44.0267C46.0556 43.8731 46.0756 43.6017 46.1118 43.2127C46.148 42.8237 46.1658 42.5692 46.1651 42.4492C46.174 42.322 46.1694 42.1372 46.1512 41.8949C46.1353 41.6358 46.0873 41.4236 46.0072 41.2585C45.9366 41.0861 45.8324 40.9091 45.6946 40.7274C45.3391 40.259 44.8972 39.9843 44.3687 39.9033C43.833 39.8128 43.307 39.9633 42.7908 40.3551C42.332 40.7033 42.0645 41.1548 41.9885 41.7096C41.9052 42.2549 42.063 42.7904 42.462 43.3162L41.2145 44.2628C40.617 43.4358 40.3996 42.5538 40.5623 41.6169C40.7178 40.6704 41.2065 39.8852 42.0286 39.2614C42.9367 38.5722 43.8316 38.2923 44.7131 38.4218C45.5874 38.5416 46.2966 38.96 46.8406 39.6769C47.1671 40.1071 47.3871 40.5955 47.5005 41.142C47.6236 41.6813 47.6753 42.1167 47.6555 42.448ZM49.0295 49.8563L48.0719 48.5945L49.3337 47.637L50.2913 48.8988L49.0295 49.8563Z"
                        fill="black"/>
                    <path
                        d="M66.5957 28.5692C67.3835 28.4084 68.1223 28.3678 68.8122 28.4474C69.502 28.527 70.1017 28.7046 70.6111 28.9803C71.1182 29.2442 71.5453 29.5367 71.8925 29.8577C72.2515 30.1764 72.5624 30.5293 72.8252 30.9166L71.1674 31.255C70.7296 30.6708 70.1349 30.2472 69.3831 29.9842C68.6431 29.7189 67.7969 29.6834 66.8445 29.8779C65.563 30.1395 64.5561 30.8166 63.8238 31.9091C63.0915 33.0017 62.8862 34.3357 63.2078 35.9112C63.5031 37.3574 64.1983 38.4831 65.2935 39.2883C66.398 40.0793 67.6381 40.3344 69.0138 40.0536C69.9779 39.8568 70.7518 39.4783 71.3356 38.9182C71.9287 38.344 72.3143 37.6529 72.4923 36.845L74.1501 36.5065C73.4901 39.2132 71.8433 40.8354 69.2096 41.3731C67.3755 41.7475 65.7587 41.4469 64.3592 40.4711C62.9573 39.4835 62.0668 38.0609 61.6875 36.2032C61.3131 34.369 61.5972 32.7311 62.5399 31.2894C63.4802 29.836 64.8321 28.9292 66.5957 28.5692Z"
                        fill="black"/>
                    <path
                        d="M78.4144 35.8183C78.5462 34.5049 79.091 33.4621 80.0489 32.6898C81.0199 31.9069 82.1562 31.5807 83.4576 31.7113C84.783 31.8443 85.8318 32.3897 86.604 33.3476C87.3882 34.3067 87.7149 35.437 87.5844 36.7384C87.4562 38.016 86.9113 39.0588 85.9498 39.8669C84.9884 40.6749 83.8509 41.013 82.5375 40.8812C81.236 40.7506 80.1879 40.1992 79.393 39.227C78.61 38.256 78.2838 37.1198 78.4144 35.8183ZM79.883 35.9657C79.7884 36.9089 80.0138 37.7275 80.5592 38.4214C81.1166 39.1166 81.8192 39.5067 82.6669 39.5917C83.5624 39.6816 84.3344 39.4394 84.983 38.8653C85.6435 38.2924 86.0211 37.5343 86.1157 36.5911C86.2092 35.6597 85.9951 34.8483 85.4736 34.1568C84.9639 33.4664 84.2494 33.0752 83.33 32.9829C82.4226 32.8918 81.6452 33.1274 80.9978 33.6896C80.3505 34.2518 79.9789 35.0104 79.883 35.9657Z"
                        fill="black"/>
                    <path
                        d="M91.1977 42.3161L94.291 34.2681L95.6183 34.7783L95.2308 35.7864L95.2644 35.7993C96.2525 35.202 97.2618 35.1014 98.2923 35.4975C99.1436 35.8247 99.7688 36.4057 100.168 37.2405C100.582 38.0683 100.551 39.1039 100.073 40.3472L98.2712 45.0349L96.9438 44.5247L98.7133 39.9211C99.0233 39.1146 99.0774 38.4219 98.8757 37.843C98.6851 37.2684 98.2706 36.8583 97.6322 36.6129C96.8929 36.3288 96.2157 36.3514 95.6006 36.6806C95.0011 37.003 94.5248 37.6234 94.1717 38.5419L92.525 42.8263L91.1977 42.3161Z"
                        fill="black"/>
                    <path
                        d="M102.081 47.346L107.127 40.3553L108.28 41.1876L107.648 42.0633L107.677 42.0843C108.785 41.7593 109.787 41.9199 110.682 42.5661C111.421 43.0999 111.877 43.8213 112.05 44.7303C112.239 45.6366 111.944 46.6298 111.164 47.7098L108.225 51.7816L107.072 50.9492L109.959 46.9504C110.464 46.2499 110.694 45.594 110.647 44.9827C110.609 44.3785 110.313 43.8762 109.759 43.4759C109.116 43.0123 108.456 42.8611 107.777 43.0223C107.115 43.1808 106.496 43.6589 105.92 44.4567L103.234 48.1783L102.081 47.346Z"
                        fill="black"/>
                    <path
                        d="M120.548 52.1895C121.02 52.7647 121.327 53.3662 121.47 53.9942C121.613 54.6222 121.607 55.2014 121.452 55.7318C121.305 56.2716 121.086 56.7616 120.796 57.2019C120.514 57.6346 120.179 58.0108 119.789 58.3305C119.613 58.4752 119.471 58.5763 119.363 58.6338L114.898 53.1932C114.295 53.688 113.956 54.3622 113.88 55.2159C113.814 56.062 114.04 56.8005 114.557 57.4313C115.121 58.1178 115.858 58.4675 116.769 58.4805L117.808 59.7468C117.103 59.8905 116.369 59.8565 115.605 59.6448C114.859 59.4349 114.192 58.9727 113.606 58.2584C112.746 57.2102 112.394 56.0713 112.549 54.8417C112.712 53.6215 113.317 52.5812 114.365 51.721C115.321 50.937 116.388 50.5732 117.568 50.6298C118.748 50.6863 119.741 51.2062 120.548 52.1895ZM119.588 52.9774C119.093 52.3744 118.486 52.0418 117.768 51.9795C117.058 51.9096 116.412 52.0676 115.828 52.4535L119.356 56.7531C119.858 56.2483 120.14 55.6366 120.202 54.918C120.272 54.2087 120.067 53.5618 119.588 52.9774Z"
                        fill="black"/>
                    <path
                        d="M128.039 64.619C128.498 65.623 128.622 66.5295 128.411 67.3383C128.217 68.1531 127.873 68.7721 127.38 69.1953L126.722 67.7547C127.321 67.0453 127.383 66.1722 126.909 65.1354C126.55 64.3497 125.981 63.8117 125.202 63.5214C124.433 63.2262 123.563 63.3006 122.592 63.7447C121.708 64.1489 121.099 64.7506 120.765 65.5498C120.436 66.3599 120.462 67.1797 120.841 68.0091C121.3 69.0131 122.055 69.5254 123.107 69.5459L123.766 70.9865C122.968 71.0607 122.2 70.9105 121.462 70.5357C120.723 70.161 120.132 69.488 119.687 68.5167C119.129 67.2944 119.062 66.1107 119.489 64.9657C119.926 63.8157 120.762 62.9587 121.995 62.3949C123.173 61.856 124.333 61.7809 125.474 62.1697C126.62 62.5693 127.475 63.3858 128.039 64.619Z"
                        fill="black"/>
                    <path
                        d="M129.584 73.6031L130.747 73.3613L130.978 74.4716L133.675 73.9111L133.964 75.3033L131.268 75.8638L131.737 78.1196L130.573 78.3614L130.105 76.1056L125.646 77.0325C124.988 77.1692 124.55 77.3644 124.334 77.6178C124.131 77.8806 124.078 78.2469 124.176 78.7169C124.247 79.0576 124.365 79.3886 124.529 79.7097L123.384 79.9479C123.193 79.6198 123.044 79.1973 122.937 78.6804C122.741 77.7405 122.872 77.0452 123.33 76.5946C123.788 76.144 124.481 75.8222 125.409 75.6292L129.815 74.7134L129.584 73.6031Z"
                        fill="black"/>
                    <path
                        d="M122.113 99.0977L127.359 98.9639C127.95 98.959 128.587 98.9703 129.269 98.9978L129.284 98.9275C128.513 98.6346 127.818 98.3338 127.197 98.0251L122.823 95.8809L123.222 94.0704L132.13 93.7118L131.82 95.1181L125.974 95.2118C125.322 95.2155 124.74 95.21 124.227 95.1952L124.212 95.2656C124.515 95.3939 125.071 95.6578 125.88 96.0574L131.056 98.5809L130.723 100.093L124.884 100.243C124.377 100.254 123.788 100.253 123.115 100.24L123.103 100.293C123.671 100.504 124.204 100.732 124.703 100.977L129.96 103.555L129.653 104.944L121.722 100.873L122.113 99.0977Z"
                        fill="black"/>
                    <path
                        d="M119.3 106.52L127.065 110.266L126.448 111.547L118.682 107.801L119.3 106.52ZM129 111.02L130.508 111.747L129.742 113.336L128.234 112.609L129 111.02Z"
                        fill="black"/>
                    <path
                        d="M122.361 116.317L123.327 117.009L122.666 117.93L124.905 119.534L124.077 120.69L121.838 119.086L120.496 120.959L119.53 120.267L120.872 118.394L117.17 115.742C116.624 115.351 116.184 115.161 115.851 115.173C115.52 115.202 115.215 115.411 114.936 115.802C114.733 116.084 114.569 116.395 114.445 116.734L113.493 116.053C113.606 115.69 113.815 115.294 114.123 114.865C114.682 114.085 115.282 113.71 115.924 113.742C116.566 113.774 117.272 114.065 118.043 114.618L121.7 117.239L122.361 116.317Z"
                        fill="black"/>
                    <path
                        d="M110.285 119.535L118.881 129.234L117.817 130.177L114.224 126.122L114.197 126.146C114.263 127.306 113.887 128.248 113.07 128.973C112.387 129.578 111.588 129.869 110.671 129.848C109.745 129.835 108.837 129.325 107.945 128.319L104.614 124.561L105.678 123.618L108.962 127.322C109.527 127.96 110.113 128.323 110.719 128.41C111.317 128.506 111.872 128.327 112.384 127.873C112.977 127.348 113.273 126.741 113.272 126.052C113.262 125.371 112.93 124.663 112.278 123.926L109.221 120.478L110.285 119.535Z"
                        fill="black"/>
                    <path
                        d="M89.1602 140.669L86.6564 132.419L88.0171 132.006L88.3255 133.022L88.36 133.012C88.7382 131.944 89.4383 131.255 90.4602 130.945C91.2985 130.69 92.124 130.766 92.9368 131.171C93.7415 131.592 94.3373 132.439 94.7241 133.714L96.1877 138.537L94.827 138.95L93.3948 134.23C93.1439 133.403 92.7725 132.82 92.2806 132.48C91.7772 132.144 91.2213 132.068 90.6127 132.253C89.8893 132.472 89.4015 132.89 89.1495 133.506C88.8859 134.125 88.897 134.905 89.1828 135.847L90.5209 140.256L89.1602 140.669Z"
                        fill="black"/>
                    <path
                        d="M76.7319 139.831L78.1698 139.753C78.2597 140.085 78.4422 140.352 78.7174 140.553C78.9806 140.756 79.28 140.848 79.6155 140.83C80.0349 140.807 80.3643 140.675 80.6037 140.434C80.8318 140.206 80.9372 139.93 80.9199 139.606C80.9038 139.307 80.7696 139.043 80.5171 138.817C80.2532 138.602 79.7557 138.401 79.0246 138.212C77.33 137.762 76.4481 136.89 76.3788 135.595C76.3364 134.804 76.566 134.155 77.0676 133.648C77.5698 133.152 78.2642 132.881 79.151 132.833C80.0617 132.784 80.7872 132.98 81.3275 133.419C81.8684 133.871 82.232 134.489 82.4181 135.272L80.9802 135.349C80.727 134.437 80.1212 134.007 79.1625 134.058C78.7072 134.083 78.3601 134.221 78.1213 134.475C77.8825 134.728 77.7731 135.04 77.793 135.411C77.8142 135.807 77.9633 136.123 78.2404 136.361C78.5182 136.61 79.0412 136.841 79.8096 137.052C80.6386 137.272 81.256 137.581 81.6619 137.98C82.0679 138.379 82.2882 138.902 82.3228 139.549C82.3581 140.208 82.154 140.772 81.7104 141.24C81.2555 141.721 80.6027 141.985 79.7519 142.03C78.1822 142.114 77.1755 141.381 76.7319 139.831Z"
                        fill="black"/>
                </svg>
            </WholesaleSection>

            <GetTheApp/>

            <WholesaleSection id="contactUsSection">

                <svg width="347" height="505" viewBox="0 0 347 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="contactUsMobile">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M24 0C10.7452 0 0 10.7452 0 24V481C0 494.255 10.7452 505 24 505H116.345C129.022 505 138 486.178 138 473.5V473.5C138 449.298 157.878 430 182 430C206.122 430 226 449.298 226 473.5V473.5C226 486.178 234.978 505 247.655 505H323C336.255 505 347 494.255 347 481V24C347 10.7452 336.255 0 323 0H24ZM182 505C199.673 505 214 490.897 214 473.5C214 456.103 199.673 442 182 442C164.327 442 150 456.103 150 473.5C150 490.897 164.327 505 182 505Z"
                                  fill="#C4C4C4"/>
                        </clipPath>
                    </defs>

                    <image href={ContactUsPic} width="1320" height="293" clip-path="url(#contactUsMobile)"
                           preserveAspectRatio="xMidYMid slice"/>

                    <rect x="165" y="458" width="36.7647" height="29.5431" rx="4" fill="white"/>
                    <path d="M170.909 465.55L183.054 474.084L195.2 465.55" stroke="black" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round"/>
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

            <AssortmentSection />
        </WholesaleStyled>
    )
}

export default MobileWholesalePage;