import {BecomeCustomerSectionStyled} from "../styled/wholesale/BecomeCustomerSection.styled";
import {IoArrowForward} from "react-icons/io5";
import React from "react";

const BecomeCustomerSection = () => {
    return (
        <BecomeCustomerSectionStyled>
            <h4>Become a customer</h4>
            <p>Whether you run a restaurant, store or company, we’ve your search for impactful ingredients covered. Do
                you want access to our app, or get monthly offerings, it all starts here. </p>

            <button>Create a trade account <IoArrowForward/></button>
        </BecomeCustomerSectionStyled>
    )
}

export default BecomeCustomerSection;