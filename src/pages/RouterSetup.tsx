import {Route, Routes} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import HomePage from "./static/HomePage";
import Wholesale from "./static/Wholesale";
import CompanyPage from "./static/CompanyPage";
import Login from "./static/Login";
import Register from "./static/Register";
import Stories from "./dynamic/Stories";
import StoriesBlogs from "./dynamic/StoriesBlogs";
import StoriesPodcasts from "./dynamic/StoriesPodcasts";
import StoriesEvents from "./dynamic/StoriesEvents";
import StoriesProducers from "./dynamic/StoriesProducers";
import StoriesInterviews from "./dynamic/StoriesInterviews";
import StoriesRecipies from "./dynamic/StoriesRecipies";
import React from "react";
import useScreenSize from "../hooks/useScreenSize";
import ContactUs from "./static/ContactUs";

const RouterSetup = () => {
    const isMobile = useScreenSize({minWidth: 200, maxWidth: 600});
    const isTablet = useScreenSize({minWidth: 601, maxWidth: 1024});

    return(
        <Routes>
            <Route path="" element={<DefaultLayout isMobile={isMobile} isTablet={isTablet} />}>
                <Route index element={<HomePage />
                }/>
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