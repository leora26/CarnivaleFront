import {RegisterHeadingStyled} from "../styled/register/RegisterHeading.styled";
import RegisterImg from "../../assets/pictures/register/carnivale_©_kv_0002.jpg";
import React from "react";

const RegisterHeading = () => {
    return (
        <RegisterHeadingStyled>
            <img src={RegisterImg} alt="Register"/>
            <div id="register-text">
                <h2>Become a pro customer</h2>
                <p>We're delighted that you're considering partnering with us to bring extraordinary artisanal foods
                    to your clientele sourced directly from passionate, small-scale producers who champion
                    sustainable and ethical practices.</p>
                <p>We eagerly anticipate connecting with you to cultivate a partnership that celebrates taste,
                    heritage, and conscious consumption. To begin your journey with us, please complete the form
                    below.</p>
            </div>
        </RegisterHeadingStyled>
    )
}

export default RegisterHeading;