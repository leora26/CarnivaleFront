import {StoriesStyled} from "../../components/styled/stories/Stories.styled";
import React, {useState} from "react";
import StoriesNavigation from "../../components/stories/StoriesNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import MobileStoriesNavigation from "../../components/stories/MobileStoriesNavigation";
import StoriesContainer from "../../components/stories/StoriesContainer";
import LoadMoreButton from "../../components/global/LoadMoreButton";
import useFetchStories from "../../hooks/useFetchStories";
import AllStories from "../../models/response/AllStories";

const Stories: React.FC = () => {
    const isSmallScreen = useScreenSize({minWidth: 200, maxWidth: 1024});

    const {data, error, isLoading} = useFetchStories("story")
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const allStories = data ? data.data : [];

    return (
        <StoriesStyled>
            <h1>Stories</h1>
            {isSmallScreen ? <MobileStoriesNavigation currentPage="All" /> : <StoriesNavigation />}
            <StoriesContainer listStories={listStories} loading={isLoading} allStories={allStories} />
            <LoadMoreButton handleLoadMore={handleLoadMore}/>
        </StoriesStyled>
    )
}

export default Stories;