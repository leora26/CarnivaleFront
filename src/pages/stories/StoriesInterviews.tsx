import {StoriesStyled} from "../../components/styled/stories/Stories.styled";
import React, {useState} from "react";
import StoriesNavigation from "../../components/stories/StoriesNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import MobileStoriesNavigation from "../../components/stories/MobileStoriesNavigation";
import StoriesContainer from "../../components/stories/StoriesContainer";
import LoadMoreButton from "../../components/global/LoadMoreButton";
import useFetchStories from "../../hooks/useFetchStories";

const StoriesInterviews= () => {
    const isSmallScreen = useScreenSize({minWidth: 200, maxWidth: 1024});

    const {data, isLoading, error} = useFetchStories("interviews")
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const interviews = data ? data.data : []

    return (
        <StoriesStyled>
            <h1>Interviews</h1>
            {isSmallScreen ? <MobileStoriesNavigation currentPage="Interviews" /> : <StoriesNavigation />}
            <StoriesContainer allStories={interviews} listStories={listStories} loading={isLoading} />
            <LoadMoreButton handleLoadMore={handleLoadMore}/>
        </StoriesStyled>
    )
}

export default StoriesInterviews;