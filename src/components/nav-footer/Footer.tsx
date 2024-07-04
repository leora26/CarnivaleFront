import {
    Container,
    FooterForm,
    FooterNavigation,
    FooterStyled,
    ParagraphStyled,
    FooterNavigationContainer,
    PrivacyContainer
} from "../styled/nav-footer/Footer.styled";
import {FaRegArrowAltCircleRight} from "react-icons/fa";
import {AiOutlineFacebook} from "react-icons/ai";
import SocialIcons from "./SocialIcons";
import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";


const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterForm>
                    <label htmlFor="email">Join us</label>
                    <Container>
                        <input type="email" id="email" placeholder="email@gmail.com"/>
                        <button type="submit"><FaRegArrowAltCircleRight/></button>
                    </Container>
                    <SocialIcons/>
                </FooterForm>

                <FooterNavigationContainer>
                    <FooterNavigation>
                        <span>Distribution</span>
                        <NavigationItemStyled color='#BEBEBE' to="/wholesale">Wholesale</NavigationItemStyled>
                        <NavigationItemStyled color='#BEBEBE' to="/shop">Shop</NavigationItemStyled>
                        <NavigationItemStyled color='#BEBEBE' to="/boxes">Boxes</NavigationItemStyled>
                    </FooterNavigation>

                    <FooterNavigation>
                        <span>Company</span>
                        <NavigationItemStyled color='#BEBEBE' to="/aboutUs">About us</NavigationItemStyled>
                        <NavigationItemStyled color='#BEBEBE' to="/search">Search</NavigationItemStyled>
                        <NavigationItemStyled color='#BEBEBE' to="/contact">Contact</NavigationItemStyled>
                    </FooterNavigation>
                </FooterNavigationContainer>
            </Container>
            <h1>CARNIVALE</h1>
            <PrivacyContainer>
                <ParagraphStyled>&copy; 2024 CARNIVALE</ParagraphStyled>
                <NavigationItemStyled color='white' to="/policy">PRIVACY POLICY</NavigationItemStyled>
                <NavigationItemStyled color='white' to="/conditions">TERMS AND CONDITIONS</NavigationItemStyled>
                <NavigationItemStyled color='white' to="/search">TO SEARCH</NavigationItemStyled>
            </PrivacyContainer>
        </FooterStyled>
    )
}

export default Footer;