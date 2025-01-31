import React from "react";
import AllStories from "../../models/response/AllStories";
import StoryCard from "../global/StoryCard";
import {latestStories} from "../../models/dataFaker";
import {LatestStoriesStyled} from "../styled/homepage/LatestStories.styled";
import useFetchStories from "../../hooks/useFetchStories";

const LatestStories = () => {
    const {data, isLoading, error} = useFetchStories("latest");

    const stories: AllStories[] = error ? latestStories : data?.data || [];

    return (
        <LatestStoriesStyled
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