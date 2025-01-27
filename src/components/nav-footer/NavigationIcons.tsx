import {NavigationIcon, NavigationIconsStyled} from "../styled/nav-footer/NavigationIcons.styled";
import ManIcon from "../../assets/pictures/man-icon.png"
import MagnifierIcon from "../../assets/pictures/magnifier-icon.png"
import CartIcon from "../../assets/pictures/cart-icon.png"

export default function NavigationIcons() {
    return (
        <NavigationIconsStyled>
            <NavigationIcon to="/login">
                <img src={ManIcon} alt="Man Icon"/>
            </NavigationIcon>
        </NavigationIconsStyled>
    )
}