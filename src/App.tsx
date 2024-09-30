import React, {useEffect, useState} from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/static/HomePage";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";
import GlobalStyles from "./components/styled/global/Global";
import Login from "./pages/static/Login";
import Register from "./pages/static/Register";
import Wholesale from "./pages/static/Wholesale";
import Stories from "./pages/dynamic/Stories";
import StoriesBlogs from "./pages/dynamic/StoriesBlogs";
import StoriesPodcasts from "./pages/dynamic/StoriesPodcasts";
import StoriesEvents from "./pages/dynamic/StoriesEvents";
import StoriesProducers from "./pages/dynamic/StoriesProducers";
import StoriesInterviews from "./pages/dynamic/StoriesInterviews";
import StoriesRecipies from "./pages/dynamic/StoriesRecipies";
import MobileHomePage from "./pages/mobile/MobileHomePage";
import MobileWholesalePage from "./pages/mobile/MobileWholesalePage";
import TabletHomePage from "./pages/tablet/TabletHomePage";
import useScreenSize from "./hooks/useScreenSize";

function App() {

    const isMobile = useScreenSize({minWidth: 200, maxWidth: 600});
    const isTablet = useScreenSize({minWidth: 601, maxWidth: 1024});

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
                <Routes>
                    <Route path="" element={<DefaultLayout isMobile={isMobile} isTablet={isTablet} />}>
                        <Route index element={
                            isMobile ? <MobileHomePage /> : isTablet ? <TabletHomePage /> : <HomePage />
                        }/>                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="wholesale" element={isMobile ? <MobileWholesalePage /> : <Wholesale />}/>
                        <Route path="stories" element={<Stories />}/>
                        <Route path="stories/blogs" element={<StoriesBlogs />}/>
                        <Route path="stories/podcasts" element={<StoriesPodcasts />}/>
                        <Route path="stories/events" element={<StoriesEvents />}/>
                        <Route path="stories/producers" element={<StoriesProducers />}/>
                        <Route path="stories/interviews" element={<StoriesInterviews />}/>
                        <Route path="stories/recipies" element={<StoriesRecipies />}/>
                    </Route>
                </Routes>
        </ThemeProvider>
    );
}

export default App;
