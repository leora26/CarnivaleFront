import { AiOutlineFacebook } from "react-icons/ai";
import {FaInstagram} from "react-icons/fa"
import {SocialIconsStyled} from "./styled/SocialIcons.styles";

export default function SocialIcons(){
    return (
        <SocialIconsStyled>
            <li>
                <a href="https://www.instagram.com/"><FaInstagram/></a>
            </li>
            <li>
                <a href="https://www.facebook.com/"><AiOutlineFacebook/></a>
            </li>
        </SocialIconsStyled>
    )
}