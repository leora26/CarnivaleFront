import React from "react";
import AllStories from "../../models/AllStories";
import {StoryCardImage, StoryCardStyled} from "../styled/global/StoryCard.styled";

const StoryCard: React.FC<{story: AllStories }> = (props) => {
    return (
        <StoryCardStyled>
            <StoryCardImage src={props.story.mediaContents[0].url} alt="Story picture"/>
            <h2>{props.story.title}</h2>
            <p>{props.story.subTitle}</p>
        </StoryCardStyled>
    )
}

export default StoryCard;