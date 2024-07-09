import {Outlet} from "react-router-dom";
import Navigation from "../components/nav-footer/Navigation";
import Footer from "../components/nav-footer/Footer";

const DefaultLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}


export default DefaultLayout;