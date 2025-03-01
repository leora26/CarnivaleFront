import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import useScreenSize from "../hooks/useScreenSize";
import React from "react";
import HomePage from "./HomePage";
import Wholesale from "./Wholesale";
import CompanyPage from "./CompanyPage";
import Login from "./Login";
import Register from "./Register";
import ContactUs from "./ContactUs";
import Stories from "./stories/Stories";
import StoriesBlogs from "./stories/StoriesBlogs";
import StoriesPodcasts from "./stories/StoriesPodcasts";
import StoriesEvents from "./stories/StoriesEvents";
import StoriesProducers from "./stories/StoriesProducers";
import StoriesInterviews from "./stories/StoriesInterviews";
import StoriesRecipies from "./stories/StoriesRecipies";
import TabletHomePage from "./tablet/TabletHomePage";


const RouterSetup = () => {
    const isMobile = useScreenSize({minWidth: 200, maxWidth: 600});
    const isTablet = useScreenSize({minWidth: 601, maxWidth: 1024});

    return(
        <Routes>
            <Route path="" element={<DefaultLayout isMobile={isMobile} isTablet={isTablet} />}>
                <Route index element={isTablet ? <TabletHomePage /> : <HomePage />}/>
                <Route path="wholesale" element={<Wholesale />
                }/>
                <Route path="companies" element={<CompanyPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="contactUs/:theme" element={<ContactUs />} />
                <Route path="stories" element={<Stories />}/>
                <Route path="stories/blogs" element={<StoriesBlogs />}/>
                <Route path="stories/podcasts" element={<StoriesPodcasts />}/>
                <Route path="stories/events" element={<StoriesEvents />}/>
                <Route path="stories/producers" element={<StoriesProducers />}/>
                <Route path="stories/interviews" element={<StoriesInterviews />}/>
                <Route path="stories/recipies" element={<StoriesRecipies />}/>
            </Route>
        </Routes>
    )
}

export default RouterSetup;