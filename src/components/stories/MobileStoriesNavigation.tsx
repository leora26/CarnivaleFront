import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React, {useState} from "react";
import {StoriesMobileNavigationStyled, StoriesNavigationStyled} from "../styled/stories/Stories.styled";
import {StoriesMenuHeader} from "../styled/stories/StoriesMenuHeader";
import {motion, AnimatePresence} from "framer-motion";

interface CurrentPageProps {
    currentPage: string;
}

const StoriesNavigation: React.FC<CurrentPageProps> = ({currentPage}) => {
    const [open, setIsOpen] = useState<boolean>(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <StoriesMenuHeader onClick={handleClick}>
                <h4>{currentPage}</h4>
                {/* Animated SVG with rotation effect */}
                <motion.svg
                    initial={{rotate: 0}}
                    animate={{rotate: open ? 180 : 0}}
                    transition={{duration: 0.4}}
                    width="34"
                    height="21"
                    viewBox="0 0 34 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 1L17 18L32 1" stroke="black" strokeWidth="3"/>
                </motion.svg>
            </StoriesMenuHeader>

            <AnimatePresence>
                {open && (
                    <StoriesMobileNavigationStyled
                        as={motion.div}
                        key="mobile-menu"
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.4}}
                        style={{overflow: "hidden"}}
                    >
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/blogs"
                        >
                            BLOGS
                        </NavigationItemStyled>
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/podcasts"
                        >
                            PODCASTS
                        </NavigationItemStyled>
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/events"
                        >
                            EVENTS
                        </NavigationItemStyled>
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/producers"
                        >
                            PRODUCERS
                        </NavigationItemStyled>
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/interviews"
                        >
                            INTERVIEWS
                        </NavigationItemStyled>
                        <NavigationItemStyled
                            className="storiesNavigation"
                            fontSizeSmall="1.8rem"
                            fontSize="2rem"
                            fontWeight={400}
                            color="black"
                            to="/stories/recipies"
                        >
                            RECIPIES
                        </NavigationItemStyled>
                    </StoriesMobileNavigationStyled>
                )}
            </AnimatePresence>
        </>
    );
};

export default StoriesNavigation;
