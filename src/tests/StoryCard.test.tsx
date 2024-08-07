import {render, screen} from "@testing-library/react";
import {ThemeProvider} from "styled-components";
import theme from "../components/styled/theme";
import AllStories from "../models/AllStories";
import MediaContent from "../models/MediaContent";
import StoryCard from "../components/global/StoryCard";

describe("ProductCard component", () => {
    test("should render product", () => {
        const story = new AllStories(
            1,
            "Test story",
            "this is a test story",
            "10/12/2015",
            [new MediaContent(
                1,
                "https://via.placeholder.com/150x150",
                "Image",
            )],
        );
        render(
            <ThemeProvider theme={theme}>
                <StoryCard story={story} />
            </ThemeProvider>
        );

        const storyImage = screen.getByRole("img") as HTMLImageElement;
        expect(storyImage.src).toBe(story.mediaContents[0].url);

        const storyTitle = screen.getByText(story.title);
        expect(storyTitle).toBeInTheDocument();

        const storySubTitle = screen.getByText(story.subTitle);
        expect(storySubTitle).toBeInTheDocument();

    })
})