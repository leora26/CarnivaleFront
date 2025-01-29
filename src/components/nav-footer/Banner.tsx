import BannerStyled from "../styled/nav-footer/Banner.styled";
import {useContext} from "react";
import {HomepageContext} from "../../context/HomepageContext";

const Banner = () => {

    const homepageInfo = useContext(HomepageContext);

    return (
        <BannerStyled>
            <p>{homepageInfo?.homepageInfo?.bannerText}</p>
        </BannerStyled>
    )
}

export default Banner;