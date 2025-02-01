import React from "react";
import StoryCard from "../global/StoryCard";
import {LatestStoriesStyled, LatestStoryCardContainer} from "../styled/homepage/LatestStories.styled";
import useFetchStories from "../../hooks/useFetchStories";
import LatestStory1SVG from "../../assets/svg/LatestStory1SVG";
import LatestStory2SVG from "../../assets/svg/LatestStory2SVG";

const LatestStories = () => {
    const { data, isLoading, error } = useFetchStories("latest");
    const stories = data?.data;
    console.log("Latest stories", stories)

    if (!stories || stories.length < 1) return <div>No stories found.</div>;

    return (
        <LatestStoriesStyled>
            <LatestStoryCardContainer>
                <LatestStory1SVG imgUrl={stories[0].mediaContentDTOS[0].url} />
                <StoryCard story={stories[0]} className="latestStoryCard" />
            </LatestStoryCardContainer>
            <LatestStoryCardContainer>
                <LatestStory2SVG imgUrl={stories[1].mediaContentDTOS[0].url} />
                <StoryCard story={stories[1]} className="latestStoryCard" />
            </LatestStoryCardContainer>
        </LatestStoriesStyled>
    );
};

export default LatestStories;