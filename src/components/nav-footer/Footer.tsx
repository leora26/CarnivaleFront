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


const Footer = () => {
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
                        <NavigationItemStyled fontWeight={400} color='black'
                                              to="/wholesale">Wholesale</NavigationItemStyled>
                        <NavigationItemStyled fontWeight={400} color='black' to="/shop">Shop</NavigationItemStyled>
                        <NavigationItemStyled fontWeight={400} color='black' to="/boxes">Boxes</NavigationItemStyled>
                    </FooterNavigation>

                    <FooterNavigation>
                        <span>Company</span>
                        <NavigationItemStyled fontWeight={400} color='black' to="/aboutUs">About
                            us</NavigationItemStyled>
                        <NavigationItemStyled fontWeight={400} color='black' to="/search">Search</NavigationItemStyled>
                        <NavigationItemStyled fontWeight={400} color='black'
                                              to="/contact">Contact</NavigationItemStyled>
                    </FooterNavigation>
                </FooterNavigationContainer>
            </Container>
            <h1>CARNIVALE</h1>
            <PrivacyContainer>
                <ParagraphStyled>&copy; CARNIVALE 2024</ParagraphStyled>
                <NavigationItemStyled fontWeight={300} color='black' to="/policy">PRIVACY POLICY</NavigationItemStyled>
                <NavigationItemStyled fontWeight={300} color='black' to="/conditions">TERMS AND
                    CONDITIONS</NavigationItemStyled>
            </PrivacyContainer>
        </FooterStyled>
    )
}

export default Footer;