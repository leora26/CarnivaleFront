import {StoriesStyled} from "../../components/styled/stories/Stories.styled";
import React, {useState} from "react";
import StoriesNavigation from "../../components/stories/StoriesNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import MobileStoriesNavigation from "../../components/stories/MobileStoriesNavigation";
import LoadMoreButton from "../../components/global/LoadMoreButton";
import StoriesContainer from "../../components/stories/StoriesContainer";
import useFetchStories from "../../hooks/useFetchStories";

const StoriesRecipies = () => {
    const isSmallScreen = useScreenSize({minWidth: 200, maxWidth: 1024});

    const {data, isLoading, error} = useFetchStories("recipies");
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const recipies = data ? data.data : [];

    return (
        <StoriesStyled>
            <h1>Recipies</h1>
            {isSmallScreen ? <MobileStoriesNavigation currentPage="Recipies" /> : <StoriesNavigation />}
            <StoriesContainer listStories={listStories} loading={isLoading} allStories={recipies} />
            <LoadMoreButton handleLoadMore={handleLoadMore}/>
        </StoriesStyled>
    )
}

export default StoriesRecipies;