import { NavigationItemStyled} from "./styled/NavigationItem.styled";
import React from "react";
import {Container, NavigationStyled, Logo} from "./styled/Navigation.styled";
import LogoPicture from "../assets/pictures/carnivale-logo.png"
import NavigationIcons from "./NavigationIcons";

const Navigation = () => {
    return (
        <NavigationStyled>
            <Container>
                <NavigationItemStyled to="/wholesale">Wholesale</NavigationItemStyled>
                <NavigationItemStyled to="/shop">Shop</NavigationItemStyled>
                <NavigationItemStyled to="/corporate">Corporate</NavigationItemStyled>
                <NavigationItemStyled to="/stories">Stories</NavigationItemStyled>
            </Container>

            <Logo src={LogoPicture} alt="Logo"/>

            <Container>
                <NavigationIcons/>
            </Container>
        </NavigationStyled>
    )
}

export default Navigation;