import {StoriesStyled} from "../../components/styled/stories/Stories.styled";
import React, {useState} from "react";
import AllStories from "../../models/response/AllStories";
import StoriesNavigation from "../../components/stories/StoriesNavigation";
import MobileStoriesNavigation from "../../components/stories/MobileStoriesNavigation";
import useScreenSize from "../../hooks/useScreenSize";
import StoriesContainer from "../../components/stories/StoriesContainer";
import LoadMoreButton from "../../components/global/LoadMoreButton";
import {stories} from "../../models/dataFaker";
import useFetchStories from "../../hooks/useFetchStories";

const StoriesBlogs: React.FC = () => {
    const isSmallScreen = useScreenSize({minWidth: 200, maxWidth: 1024});

    const {data, isLoading, error} = useFetchStories("blogs");
    const [listStories, setListStories] = useState<number>(12)

    const handleLoadMore = () => {
        setListStories((prevState) => prevState + 10)
    }

    const allStories: AllStories[] = error ? stories : data || [];

    return (
        <StoriesStyled>
            <h1>Blogs</h1>
            {isSmallScreen ? <MobileStoriesNavigation currentPage="Blogs" /> : <StoriesNavigation />}
            <StoriesContainer listStories={listStories} loading={isLoading} allStories={allStories} />
            <LoadMoreButton handleLoadMore={handleLoadMore}/>
        </StoriesStyled>
    )
}

export default StoriesBlogs;