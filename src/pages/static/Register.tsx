import React from "react";
import RegisterImg from "../../assets/pictures/register.png";
import {RegisterStyled} from "../../components/styled/register/Register.styled";
import {RegisterForm} from "../../components/styled/register/RegisterForm";
import InputV2 from "../../components/global/InputV2";
import TextAreaV1 from "../../components/global/TextAreaV1";
import CheckBox from "../../components/global/CheckBox";
import RegisterHeading from "../../components/register/RegisterHeading";

const Register: React.FC = () => {
    // const companyNameRef = useRef<HTMLInputElement>(null);
    // const phoneNumberRef = useRef<HTMLInputElement>(null);
    // const emailRef = useRef<HTMLInputElement>(null);
    // const addressRef = useRef<HTMLInputElement>(null);
    // const postalCodeRef = useRef<HTMLInputElement>(null);
    // const placeRef = useRef<HTMLInputElement>(null);
    // const vatNumberRef = useRef<HTMLInputElement>(null);
    // const billingAddressRef = useRef<HTMLInputElement>(null);
    // const billingZipcodeRef = useRef<HTMLInputElement>(null);
    // const billingLocationRef = useRef<HTMLInputElement>(null);
    // const invoiceEmailRef = useRef<HTMLInputElement>(null);

    return (
        <RegisterStyled>
            <RegisterHeading/>

            <RegisterForm>
                <section id="basic-info">
                    <h2>Contact form</h2>
                    <InputV2 backgroundColor="white" inputId="full-name" placeholder="Full name" type="text"/>
                    <InputV2 backgroundColor="white" inputId="company-name" placeholder="Company name" type="text"/>
                    <InputV2 backgroundColor="white" inputId="phone-number" placeholder="Phone number" type="text"/>
                    <InputV2 backgroundColor="white" inputId="email" placeholder="Email" type="email"/>
                    <span>Delivery address</span>
                    <InputV2 backgroundColor="white" inputId="address" placeholder="Address" type="text"/>
                    <div id="city-postal">
                        <InputV2 backgroundColor="white" inputId="city" placeholder="City" type="text"/>
                        <InputV2 backgroundColor="white" inputId="postal-code" placeholder="Postal code" type="text"/>
                    </div>
                    <InputV2 backgroundColor="white" inputId="country" placeholder="Country" type="text"/>
                </section>

                <section id="billing-info">
                    <span>Billing information</span>
                    <InputV2 backgroundColor="#FFDD5A" inputId="vat-number" placeholder="VAT number" type="text"/>
                    <TextAreaV1 backgroundColor="#FFDD5A" placeholder="Message"/>
                    <CheckBox margin="0 0 0 5%" borderColor="black" backgroundColor="#FFDD5A" checkboxId="activate-app"
                              label="Activate application"/>
                    <button>Register</button>
                </section>
            </RegisterForm>
        </RegisterStyled>
    )
}

export default Register;