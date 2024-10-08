import React from "react";
import {LatestStoriesStyled} from "../styled/homepage/LatestStories.styled";
import AllStories from "../../models/response/AllStories";
import StoryCard from "../global/StoryCard";
import {useAnimation} from "framer-motion";

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LatestStories = () => {
    const controls = useAnimation();
    // const {data, loading, error} = useFetch<AllStories[]>("http://localhost:8080");

    const data: AllStories[] = [
        {
            "id": 1,
            "title": "Name of the story number one",
            "subTitle": "A small description about story number one. And a second sentence about story number one.",
            "createdAt": "24/02/2023",
            "type": "Podcast",
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
            "type": "Podcast",
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
        <LatestStoriesStyled
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
        >
            {data?.map(story => {
                return (
                    <StoryCard key={story.id} story={story}/>
                )
            })}
        </LatestStoriesStyled>
    )
}

export default LatestStories;