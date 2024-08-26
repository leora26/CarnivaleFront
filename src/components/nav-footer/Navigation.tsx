import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React, {useCallback, useEffect, useState} from "react";
import {Container, NavigationStyled, Logo, NavigationContainer} from "../styled/nav-footer/Navigation.styled";
import LogoPicture from "../../assets/pictures/carnivale-logo.png"
import NavigationIcons from "./NavigationIcons";
import {ScrollingText} from "../homepage/ScrollingText";
import Banner from "./Banner";
import {useLocation} from "react-router-dom";

const Navigation: React.FC = () => {
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
        if (path === "/" || path === "/CarnivaleFront/") {
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
                <Container>
                    <NavigationItemStyled fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={600} color='black'
                                          to="/wholesale">WHOLESALE</NavigationItemStyled>
                    <NavigationItemStyled fontSizeSmall="1rem" fontSize="1.2rem"  fontWeight={600} color='black' to="/shop">SHOP</NavigationItemStyled>
                    <NavigationItemStyled fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={600} color='black'
                                          to="/corporate">CORPORATE</NavigationItemStyled>
                    <NavigationItemStyled fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={600} color='black' to="/stories">STORIES</NavigationItemStyled>
                </Container>

                <Logo src={LogoPicture} alt="Logo"/>

                <Container>
                    <NavigationIcons/>
                </Container>
            </NavigationStyled>
        </NavigationContainer>

    )
}

export default Navigation;