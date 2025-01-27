import { AiOutlineFacebook } from "react-icons/ai";
import {FaInstagram} from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci";
import {SocialIconsStyled} from "../styled/nav-footer/SocialIcons.styled";

export default function SocialIcons(){
    return (
        <SocialIconsStyled>
            <li>
                <a href="https://www.instagram.com/"><FaInstagram/></a>
            </li>
            <li>
                <a href="https://www.facebook.com/"><AiOutlineFacebook/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/"><CiLinkedin /></a>
            </li>
        </SocialIconsStyled>
    )
}