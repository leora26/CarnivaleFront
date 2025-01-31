import React from "react";
import AllStories from "../../models/response/AllStories";
import {StoryCardImage, StoryCardStyled} from "../styled/global/StoryCard.styled";

interface StoryCardProps {
    story: AllStories;
    className?: string;
}

const StoryCard= ({story, className}: StoryCardProps): JSX.Element => {
    return (
        <StoryCardStyled className={className}>
            {className != 'latestStoryCard' ? <StoryCardImage src={story.mediaContents[0].url} alt="Story picture"/> : null}
            <h2>{story.title}</h2>
            <p>{story.subTitle}</p>
        </StoryCardStyled>
    )
}

export default StoryCard;