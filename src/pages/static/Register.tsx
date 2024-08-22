import React from "react";
import RegisterImg from "../../assets/pictures/register.png";
import {RegisterStyled} from "../../components/styled/register/Register.styled";
import {RegisterForm} from "../../components/styled/register/RegisterForm";
import InputV2 from "../../components/global/InputV2";
import TextAreaV1 from "../../components/global/TextAreaV1";
import CheckBox from "../../components/global/CheckBox";

const Register: React.FC = () => {
    return (
        <RegisterStyled>
            <div id="register-heading-section">
                <img src={RegisterImg} alt="Register"/>
                <div id="register-text">
                    <h2>Thank you for your interest in opening a wholesale account with Carnivale. </h2>
                    <p>We're delighted that you're considering partnering with us to bring extraordinary artisanal foods
                        to your clientele sourced directly from passionate, small-scale producers who champion
                        sustainable and ethical practices.</p>
                    <p>We eagerly anticipate connecting with you to cultivate a partnership that celebrates taste,
                        heritage, and conscious consumption. To begin your journey with us, please complete the form
                        below.</p>
                </div>
            </div>

            <RegisterForm>
                <section id="basic-info">
                    <h2>Contact form</h2>
                    <InputV2 backgroundColor="white" inputId="company-name" placeholder="Company name" type="text"/>
                    <InputV2 backgroundColor="white" inputId="phone-number" placeholder="Phone number" type="text"/>
                    <InputV2 backgroundColor="white" inputId="email" placeholder="Email" type="email"/>
                    <span>Delivery address</span>
                    <InputV2 backgroundColor="white" inputId="address" placeholder="Address" type="text"/>
                    <InputV2 backgroundColor="white" inputId="postal-code" placeholder="Postal code" type="text"/>
                    <InputV2 backgroundColor="white" inputId="place" placeholder="Place" type="text"/>
                </section>

                <section id="billing-info">
                    <span>Billing information</span>
                    <InputV2 backgroundColor="#FFDD5A" inputId="vat-number" placeholder="VAT number" type="text"/>
                    <InputV2 backgroundColor="#FFDD5A" inputId="billing-address" placeholder="Billing address"
                             type="text"/>
                    <InputV2 backgroundColor="#FFDD5A" inputId="billing-zip-code" placeholder="Billing zip code"
                             type="text"/>
                    <InputV2 backgroundColor="#FFDD5A" inputId="billing-location" placeholder="Billing location"
                             type="text"/>
                    <InputV2 backgroundColor="#FFDD5A" inputId="invoice-email" placeholder="Invoice email"
                             type="email"/>
                    <TextAreaV1 backgroundColor="#FFDD5A" placeholder="Message"/>
                    <CheckBox margin="0 0 0 5%" borderColor="black" backgroundColor="#FFDD5A" checkboxId="activate-app"
                              label="Activate app"/>
                    <button>Register</button>
                </section>
            </RegisterForm>
        </RegisterStyled>
    )
}

export default Register;