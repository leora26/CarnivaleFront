import {AssortmentHeader, AssortmentStyled, ButtonContainer} from "../styled/wholesale/Assortment.styled";
import IconButton from "../styled/global/IconButton";
import {IoArrowBackSharp, IoArrowForward} from "react-icons/io5";
import React from "react";

const AssortmentSection = () => {
    return (
        <AssortmentStyled>
            <AssortmentHeader>
                <h2>Assortment</h2>
                <ButtonContainer>
                    <IconButton
                        className="assortmentSectionIconButton mobileNone"
                        borderColor="#BEBEBE"
                        borderSize="1px"
                        buttonHeight={70}
                        buttonWidth={70}
                        iconHeight={70}
                        iconWidth={70}
                    >
                        <IoArrowBackSharp className="iconProductSection" />
                    </IconButton>
                    <IconButton
                        className="assortmentSectionIconButton mobileNone"
                        borderColor="#BEBEBE"
                        borderSize="1px"
                        buttonHeight={70}
                        buttonWidth={70}
                        iconHeight={70}
                        iconWidth={70}
                    >
                        <IoArrowForward className="iconProductSection" />
                    </IconButton>
                </ButtonContainer>
            </AssortmentHeader>
        </AssortmentStyled>
    )
}

export default AssortmentSection;