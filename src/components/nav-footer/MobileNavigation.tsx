import React, {useCallback, useEffect, useState} from "react";
import {
    Container,
    NavigationStyled,
    Logo,
    NavigationContainer
} from "../styled/nav-footer/Navigation.styled";
import LogoPicture from "../../assets/pictures/carnivale-logo.png"
import NavigationIcons from "./NavigationIcons";
import Burger from "./Burger";
import {Link, useLocation} from "react-router-dom";
import {ScrollingText} from "../homepage/ScrollingText";
import Banner from "./Banner";

const MobileNavigation: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [banner, setBanner] = useState<boolean>(false);

    const location = useLocation();

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY || currentScrollY === 0) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        const path = location.pathname;
        if ((path === "/" || path === "/CarnivaleFront/")) {
            console.log(window.innerWidth)
            setBanner(true);
        } else {
            setBanner(false);
        }
    }, [location]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (
        <NavigationContainer visible={visible}>
            {banner && (
                <ScrollingText direction="left" backgroundColor="#FFE272">
                    <Banner/>
                </ScrollingText>
            )}
            <NavigationStyled visible={visible}>
                <Burger/>

                <Link to="/">
                    <Logo src={LogoPicture} alt="Logo"/>
                </Link>

                <Container>
                    <NavigationIcons/>
                </Container>
            </NavigationStyled>
        </NavigationContainer>

    )
}

export default MobileNavigation;