import { NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React from "react";
import {Container, NavigationStyled, Logo} from "../styled/nav-footer/Navigation.styled";
import LogoPicture from "../../assets/pictures/carnivale-logo.png"
import NavigationIcons from "./NavigationIcons";

const Navigation = () => {
    return (
        <NavigationStyled>
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