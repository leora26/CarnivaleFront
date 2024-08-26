import {StoriesContainer, StoriesNavigation, StoriesStyled} from "../../components/styled/stories/Stories.styled";
import {NavigationItemStyled} from "../../components/styled/nav-footer/NavigationItem.styled";
import React, {useState} from "react";
import useFetch from "../../hooks/useFetch";
import AllStories from "../../models/response/AllStories";
import ApiResponse from "../../models/response/ApiResponse";
import StoryCardV2 from "../../components/global/StoryCardV2";
import SpinnerLoader from "../../components/global/SpinnerLoader";

const Stories: React.FC = () => {
    const {response, loading, error} = useFetch<ApiResponse<AllStories[]>>("http://localhost:8080/api/story");
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const allStories: AllStories[] = error ? [
        {
            "id": 1,
            "title": "Name of the story number one",
            "subTitle": "A small description about story number one. And a second sentence about story number one.",
            "createdAt": "24/02/2023",
            "mediaContents": [
                {
                    "id": 1,
                    "url": "https://placehold.co/306x400",
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
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 3,
            "title": "Name of the story number three",
            "subTitle": "A small description about story number three. And a second sentence about story number three.",
            "createdAt": "26/02/2023",
            "mediaContents": [
                {
                    "id": 3,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 4,
            "title": "Name of the story number four",
            "subTitle": "A small description about story number four. And a second sentence about story number four.",
            "createdAt": "27/02/2023",
            "mediaContents": [
                {
                    "id": 4,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 5,
            "title": "Name of the story number five",
            "subTitle": "A small description about story number five. And a second sentence about story number five.",
            "createdAt": "28/02/2023",
            "mediaContents": [
                {
                    "id": 5,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 6,
            "title": "Name of the story number six",
            "subTitle": "A small description about story number six. And a second sentence about story number six.",
            "createdAt": "01/03/2023",
            "mediaContents": [
                {
                    "id": 6,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 7,
            "title": "Name of the story number seven",
            "subTitle": "A small description about story number seven. And a second sentence about story number seven.",
            "createdAt": "02/03/2023",
            "mediaContents": [
                {
                    "id": 7,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 8,
            "title": "Name of the story number eight",
            "subTitle": "A small description about story number eight. And a second sentence about story number eight.",
            "createdAt": "03/03/2023",
            "mediaContents": [
                {
                    "id": 8,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 9,
            "title": "Name of the story number nine",
            "subTitle": "A small description about story number nine. And a second sentence about story number nine.",
            "createdAt": "04/03/2023",
            "mediaContents": [
                {
                    "id": 9,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 10,
            "title": "Name of the story number ten",
            "subTitle": "A small description about story number ten. And a second sentence about story number ten.",
            "createdAt": "05/03/2023",
            "mediaContents": [
                {
                    "id": 10,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 11,
            "title": "Name of the story number eleven",
            "subTitle": "A small description about story number eleven. And a second sentence about story number eleven.",
            "createdAt": "06/03/2023",
            "mediaContents": [
                {
                    "id": 11,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 12,
            "title": "Name of the story number twelve",
            "subTitle": "A small description about story number twelve. And a second sentence about story number twelve.",
            "createdAt": "07/03/2023",
            "mediaContents": [
                {
                    "id": 12,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 13,
            "title": "Name of the story number thirteen",
            "subTitle": "A small description about story number thirteen. And a second sentence about story number thirteen.",
            "createdAt": "08/03/2023",
            "mediaContents": [
                {
                    "id": 13,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 14,
            "title": "Name of the story number fourteen",
            "subTitle": "A small description about story number fourteen. And a second sentence about story number fourteen.",
            "createdAt": "09/03/2023",
            "mediaContents": [
                {
                    "id": 14,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 15,
            "title": "Name of the story number fifteen",
            "subTitle": "A small description about story number fifteen. And a second sentence about story number fifteen.",
            "createdAt": "10/03/2023",
            "mediaContents": [
                {
                    "id": 15,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 16,
            "title": "Name of the story number sixteen",
            "subTitle": "A small description about story number sixteen. And a second sentence about story number sixteen.",
            "createdAt": "11/03/2023",
            "mediaContents": [
                {
                    "id": 16,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 17,
            "title": "Name of the story number seventeen",
            "subTitle": "A small description about story number seventeen. And a second sentence about story number seventeen.",
            "createdAt": "12/03/2023",
            "mediaContents": [
                {
                    "id": 17,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 18,
            "title": "Name of the story number eighteen",
            "subTitle": "A small description about story number eighteen. And a second sentence about story number eighteen.",
            "createdAt": "13/03/2023",
            "mediaContents": [
                {
                    "id": 18,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 19,
            "title": "Name of the story number nineteen",
            "subTitle": "A small description about story number nineteen. And a second sentence about story number nineteen.",
            "createdAt": "14/03/2023",
            "mediaContents": [
                {
                    "id": 19,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        },
        {
            "id": 20,
            "title": "Name of the story number twenty",
            "subTitle": "A small description about story number twenty. And a second sentence about story number twenty.",
            "createdAt": "15/03/2023",
            "mediaContents": [
                {
                    "id": 20,
                    "url": "https://placehold.co/306x400",
                    "mediaType": "IMAGE"
                }
            ]
        }
    ] : (response?.data?.data ?? []);

    return (
        <StoriesStyled>
            <h1>Stories</h1>
            <StoriesNavigation>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/blogs">BLOGS</NavigationItemStyled>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/podcasts">PODCASTS</NavigationItemStyled>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/events">EVENTS</NavigationItemStyled>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/producers">PRODUCERS</NavigationItemStyled>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/interviews">INTERVIEWS</NavigationItemStyled>
                <NavigationItemStyled className="storiesNavigation" fontSizeSmall="1.8rem" fontSize="2rem" fontWeight={400} color='black'
                                      to="/stories/recepies">RECIPIES</NavigationItemStyled>
            </StoriesNavigation>
            <StoriesContainer>
                {loading ? (
                    <SpinnerLoader />
                ) : (
                    allStories.slice(0, listStories).map(story => {
                        return <StoryCardV2 key={story.id} story={story} />;
                    })
                )}


            </StoriesContainer>
            <button onClick={handleLoadMore}>Load more
                <svg viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3L12 14L21 3" stroke="black" stroke-width="3" stroke-linecap="square"
                          stroke-linejoin="round"/>
                </svg>
            </button>
        </StoriesStyled>
    )
}

export default Stories;