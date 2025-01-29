import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/static/HomePage";
import {ThemeProvider} from "styled-components";
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
import TabletWholesalePage from "./pages/tablet/TabletWholesalePage";
import CompanyPage from "./pages/static/CompanyPage";
import RouterSetup from "./pages/RouterSetup";
import {HomepageContext, HomepageContextProvider} from "./context/HomepageContext";

function App() {


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <HomepageContextProvider>
                <RouterSetup/>
            </HomepageContextProvider>
        </ThemeProvider>
    );
}

export default App;
