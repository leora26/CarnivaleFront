import React from "react";
import AllStories from "../../models/response/AllStories";
import {StoryCardFooter, StoryCardImage, StoryCardStyled} from "../styled/global/StoryCard.styled";

const StoryCardV2: React.FC<{ story: AllStories }> = (props) => {
    return (
        <StoryCardStyled className="storyCardV2">
            <StoryCardImage src={props.story.mediaContents[0].url} alt="Story picture"/>
            <h2>{props.story.title}</h2>
            <p>{props.story.subTitle}</p>
            <StoryCardFooter>
                <span className="createdAt">{props.story.createdAt}</span>
                <span className="storyType">{props.story.type}</span>
            </StoryCardFooter>
        </StoryCardStyled>
    )
}

export default StoryCardV2;