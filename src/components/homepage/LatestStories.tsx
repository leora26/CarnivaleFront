import React from "react";
import {LatestStoriesStyled} from "../styled/homepage/LatestStories.styled";
import AllStories from "../../models/response/AllStories";
import StoryCard from "../global/StoryCard";

const LatestStories = () => {
    // const {data, loading, error} = useFetch<AllStories[]>("http://localhost:8080");

    const data: AllStories[] = [
        {
            "id": 1,
            "title": "Name of the story number one",
            "subTitle": "A small description about story number one. And a second sentence about story number one.",
            "createdAt": "24/02/2023",
            "mediaContents": [
                {
                    "id": 1,
                    "url": "https://placehold.co/644x600",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 2,
            "title": "Name of the story number two",
            "subTitle": "A small description about story number two. And a second sentence about story number two.",
            "createdAt": "25/02/2023",
            "mediaContents": [
                {
                    "id": 2,
                    "url": "https://placehold.co/644x600",
                    "mediaType": "IMAGE"
                }
            ]
        }
    ]


    return (
        <LatestStoriesStyled>
            {data?.map(story => {
                return (
                    <StoryCard key={story.id} story={story}/>
                )
            })}
        </LatestStoriesStyled>
    )
}

export default LatestStories;