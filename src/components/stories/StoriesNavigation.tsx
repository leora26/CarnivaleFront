import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React from "react";
import {StoriesNavigationStyled} from "../styled/stories/Stories.styled";

const StoriesNavigation = () => {
    return (
        <StoriesNavigationStyled>
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
                                  to="/stories/recipies">RECIPIES</NavigationItemStyled>
        </StoriesNavigationStyled>
    )
}

export default StoriesNavigation;