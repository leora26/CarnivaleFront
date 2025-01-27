import React from "react";
import AllStories from "../../models/response/AllStories";
import StoryCard from "../global/StoryCard";
import {useAnimation} from "framer-motion";
import {latestStories} from "../../models/dataFaker";
import {LatestStoriesStyled} from "../styled/homepage/LatestStories.styled";
import useFetchStories from "../../hooks/useFetchStories";

const sectionVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
};

const LatestStories = () => {
    const controls = useAnimation();
    const {data, isLoading, error} = useFetchStories("latest");

    const stories: AllStories[] = error ? latestStories : data?.data || [];


    return (
        <LatestStoriesStyled
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            whileInView="visible"
            viewport={{once: false, amount: 0.4}}
        >
            {stories?.map(story => {
                return (
                    <StoryCard key={story.id} story={story}/>
                )
            })}
        </LatestStoriesStyled>
    )
}

export default LatestStories;