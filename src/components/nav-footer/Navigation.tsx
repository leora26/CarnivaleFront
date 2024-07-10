import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React, {useCallback, useEffect, useState} from "react";
import {Container, NavigationStyled, Logo} from "../styled/nav-footer/Navigation.styled";
import LogoPicture from "../../assets/pictures/carnivale-logo.png"
import NavigationIcons from "./NavigationIcons";

const Navigation: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    return (
        <NavigationStyled visible={visible}>
            <Container>
                <NavigationItemStyled color='black' to="/wholesale">WHOLESALE</NavigationItemStyled>
                <NavigationItemStyled color='black' to="/shop">SHOP</NavigationItemStyled>
                <NavigationItemStyled color='black' to="/corporate">CORPORATE</NavigationItemStyled>
                <NavigationItemStyled color='black' to="/stories">STORIES</NavigationItemStyled>
            </Container>

            <Logo src={LogoPicture} alt="Logo"/>

            <Container>
                <NavigationIcons/>
            </Container>
        </NavigationStyled>
    )
}

export default Navigation;