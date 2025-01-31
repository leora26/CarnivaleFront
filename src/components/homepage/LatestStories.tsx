import React from "react";
import AllStories from "../../models/response/AllStories";
import StoryCard from "../global/StoryCard";
import {latestStories} from "../../models/dataFaker";
import {LatestStoriesStyled, LatestStoryCardContainer} from "../styled/homepage/LatestStories.styled";
import useFetchStories from "../../hooks/useFetchStories";
import LatestStory1SVG from "../../assets/svg/LatestStory1SVG";
import LatestStory2SVG from "../../assets/svg/LatestStory2SVG";

const LatestStories = () => {
    const {data, isLoading, error} = useFetchStories("latest");

    // TODO: Change to actual data
    const stories: AllStories[] = latestStories;

    return (
        <LatestStoriesStyled>
            <LatestStoryCardContainer>
                <LatestStory1SVG imgUrl={stories[0].mediaContents[0].url} />
                <StoryCard story={stories[0]} className="latestStoryCard"/>
            </LatestStoryCardContainer>
            <LatestStoryCardContainer>
                <LatestStory2SVG imgUrl={stories[1].mediaContents[0].url} />
                <StoryCard story={stories[1]} className="latestStoryCard"/>
            </LatestStoryCardContainer>
        </LatestStoriesStyled>
    )
}

export default LatestStories;