import {StoriesStyled} from "../../components/styled/stories/Stories.styled";
import React, {useState} from "react";
import StoriesNavigation from "../../components/stories/StoriesNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import MobileStoriesNavigation from "../../components/stories/MobileStoriesNavigation";
import StoriesContainer from "../../components/stories/StoriesContainer";
import LoadMoreButton from "../../components/global/LoadMoreButton";
import useFetchStories from "../../hooks/useFetchStories";

const StoriesEvents = () => {
    const isSmallScreen = useScreenSize({minWidth: 200, maxWidth: 1024});

    const {data, isLoading, error} = useFetchStories("events");
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const events = data? data.data : [];

    return (
        <StoriesStyled>
            <h1>Events</h1>
            {isSmallScreen ? <MobileStoriesNavigation currentPage="Events" /> : <StoriesNavigation />}
            <StoriesContainer listStories={listStories} loading={isLoading} allStories={events} />
            <LoadMoreButton handleLoadMore={handleLoadMore}/>
        </StoriesStyled>
    )
}

export default StoriesEvents;