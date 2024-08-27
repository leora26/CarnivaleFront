import {
    Container,
    FooterForm,
    FooterNavigation,
    FooterStyled,
    ParagraphStyled,
    FooterNavigationContainer,
    PrivacyContainer, ContainerForm
} from "../styled/nav-footer/Footer.styled";
import {IoIosArrowRoundForward} from "react-icons/io";
import SocialIcons from "./SocialIcons";
import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import React from "react";


const MobileFooter = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterForm>
                    <label htmlFor="email">Join us</label>
                    <ContainerForm>
                        <input type="email" id="email" placeholder="email@gmail.com"/>
                        <button type="submit"><IoIosArrowRoundForward/></button>
                    </ContainerForm>
                    <SocialIcons/>
                </FooterForm>

                <FooterNavigationContainer>
                    <FooterNavigation>
                        <span>Distribution</span>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black'
                                              to="/wholesale">Wholesale</NavigationItemStyled>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black' to="/shop">Shop</NavigationItemStyled>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black' to="/boxes">Boxes</NavigationItemStyled>
                    </FooterNavigation>

                    <FooterNavigation>
                        <span>Company</span>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black' to="/aboutUs">About
                            us</NavigationItemStyled>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black' to="/search">Search</NavigationItemStyled>
                        <NavigationItemStyled className="footerNivItem" fontSizeSmall="1rem" fontSize="1.2rem" fontWeight={400} color='black'
                                              to="/contact">Contact</NavigationItemStyled>
                    </FooterNavigation>
                </FooterNavigationContainer>
            </Container>
            <h1>CARNIVALE</h1>
            <PrivacyContainer>
                <ParagraphStyled>&copy; CARNIVALE 2024</ParagraphStyled>
                <NavigationItemStyled fontSizeSmall="0.6rem" fontSize="1.2rem" fontWeight={300} color='black' to="/policy">PRIVACY POLICY</NavigationItemStyled>
                <NavigationItemStyled fontSizeSmall="0.6rem" fontSize="1.2rem" fontWeight={300} color='black' to="/conditions">TERMS AND
                    CONDITIONS</NavigationItemStyled>
            </PrivacyContainer>
        </FooterStyled>
    )
}

export default MobileFooter;