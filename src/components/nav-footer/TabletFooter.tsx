import {
    AdditionalLinksContainer,
    EmailInputContainer,
    FooterStyled, MainFooterSection, MainSectionContainer, SignUpSection,
} from "../styled/nav-footer/Footer.styled";
import {IoIosArrowRoundForward} from "react-icons/io";
import {Link} from "react-router-dom";
import SocialIcons from "./SocialIcons";
import LegalPages from "./LegalPages";
import {useState} from "react";
import useNewsletterMutation from "../../hooks/useNewsletterMutation";


const TabletFooter = () => {

    const [email, setEmail] = useState<string | undefined>(undefined);

    const newsletterMutation = useNewsletterMutation();

    const handleNewsletterSubmit = async () => {
        if (email) {
            try {
                await newsletterMutation.mutateAsync({email});
                setEmail(undefined);
            } catch (error) {
                console.error("Error subscribing to newsletter:", error);
            }
        }
    }

    return (
        <FooterStyled>
            <SignUpSection>
                <h2>sign up for out newsletter</h2>
                <p>Be the first to explore our new launches, exclusive offers, inspiring recipes,
                    and the stories behind the artisans and producers who bring our products to life. </p>

                <EmailInputContainer>
                    <input type="email" placeholder="email@gmail.com"/>
                    <IoIosArrowRoundForward className="submitButton" onClick={handleNewsletterSubmit}/>
                </EmailInputContainer>
            </SignUpSection>

            <MainFooterSection>
                <MainSectionContainer>
                    <h3>Carnivale</h3>
                    <p>A homage to the timeless relationship between humans, the land, and the life it nurtures,
                        expressed through the language of food,
                        CARNIVALE exists to spoil you with exceptional products that reflect this essential connection.
                        On a daily basis, we supply extraordinary foods from across Europe to professionals, kitchens
                        and homes. </p>
                </MainSectionContainer>
                <SocialIcons/>

                <AdditionalLinksContainer>
                    <MainSectionContainer id="secondSection">
                        <h4>Company</h4>
                        <Link to="/">Home</Link>
                        <Link to="/wholesale">Wholesale</Link>
                        <Link to="/stories">Stories</Link>
                    </MainSectionContainer>

                    <MainSectionContainer>
                        <h4>Contact us</h4>
                        <span><b>Email</b> info@carnivale.be</span>
                        <span><b>Whatsapp</b> +477 o9 24 97</span>
                        <span><b>Phone</b> +32 3 361 0 20</span>
                        <span><b>Address</b> Gentseweg 308 C06, 9120 Beveren-Waas, Belgium</span>
                    </MainSectionContainer>
                </AdditionalLinksContainer>
            </MainFooterSection>


            <LegalPages/>
        </FooterStyled>
    )
}

export default TabletFooter;