import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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