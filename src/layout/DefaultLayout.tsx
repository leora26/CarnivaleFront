import {Outlet} from "react-router-dom";
import Navigation from "../components/nav-footer/Navigation";
import Footer from "../components/nav-footer/Footer";
import React from "react";
import MobileNavigation from "../components/nav-footer/MobileNavigation";
import MobileFooter from "../components/nav-footer/MobileFooter";

interface DefaultLayoutProps {
    isMobile: boolean
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({isMobile}) => {
    return (
        <>
            {isMobile ? <MobileNavigation/> : <Navigation/>}
            <main>
                <Outlet />
            </main>
            {isMobile ? <MobileFooter/> : <Footer/>}
        </>
    )
}


export default DefaultLayout;