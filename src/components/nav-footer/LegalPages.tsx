import {LegalPage, LegalPagesStyled} from "../styled/nav-footer/LegalPages.styled";
import { FaRegCopyright } from "react-icons/fa";

const LegalPages = () => {
    return (
        <LegalPagesStyled>
            <span><FaRegCopyright id="copyrightIcon"/>  CARNIVALE 2025</span>
            <LegalPage to="/privacy-policy">Privacy policy</LegalPage>
            <LegalPage to="/tearms-and-conditions">Terms and conditions</LegalPage>
            <LegalPage to="cookie-policy">Cookie policy</LegalPage>
        </LegalPagesStyled>
    )
}

export default LegalPages;