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

function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mediaQueryMobile = window.matchMedia('(max-width: 600px)');
        const mediaQueryTablet = window.matchMedia('(min-width: 601px) and (max-width: 1024px)');

        setIsMobile(mediaQueryMobile.matches);
        setIsTablet(mediaQueryTablet.matches);

        const handleResize = () => {
            setIsMobile(mediaQueryMobile.matches);
            setIsTablet(mediaQueryTablet.matches);
        };

        mediaQueryMobile.addEventListener('change', handleResize);
        mediaQueryTablet.addEventListener('change', handleResize);

        return () => {
            mediaQueryMobile.removeEventListener('change', handleResize);
            mediaQueryTablet.removeEventListener('change', handleResize);
        };
    }, []);


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
