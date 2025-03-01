import {Outlet} from "react-router-dom";
import Navigation from "../components/nav-footer/Navigation";
import Footer from "../components/nav-footer/Footer";
import React from "react";
import MobileNavigation from "../components/nav-footer/MobileNavigation";
import TabletFooter from "../components/nav-footer/TabletFooter";

interface DefaultLayoutProps {
    isTablet: boolean;
    isMobile: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({isTablet, isMobile}) => {
    return (
        <>
            {isTablet || isMobile ? <MobileNavigation/> : <Navigation/>}
            <main>
                <Outlet />
            </main>
            {isTablet ? <TabletFooter/> : <Footer/>}
        </>
    )
}


export default DefaultLayout;