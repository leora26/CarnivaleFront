import SpinnerLoader from "../global/SpinnerLoader";
import StoryCardV2 from "../global/StoryCardV2";
import React from "react";
import AllStories from "../../models/response/AllStories";
import {StoriesContainerStyled} from "../styled/stories/StoriesContainer.styled";

interface StoriesContainerProps {
    loading: boolean;
    allStories: AllStories[];
    listStories: number;
}

const StoriesContainer: React.FC<StoriesContainerProps> = ({loading, listStories, allStories}) => {
    return (
        <StoriesContainerStyled>
            {loading ? (
                <SpinnerLoader height={40} />
            ) : (
                allStories.slice(0, listStories).map(story => {
                    return <StoryCardV2 key={story.id} story={story} />;
                })
            )}
        </StoriesContainerStyled>
    )
}

export default StoriesContainer;