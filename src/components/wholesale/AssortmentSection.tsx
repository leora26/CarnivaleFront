import { AssortmentHeader, AssortmentStyled, ButtonContainer } from "../styled/wholesale/Assortment.styled";
import IconButton from "../styled/global/IconButton";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import React, { useState } from "react";
import CarouselV1 from "../global/CarouselV1";
import BeefAssortment from "../../assets/pictures/beef-assortment.jpg";
import PoultryAssortment from "../../assets/pictures/poultry-assortment.png";
import PorkAssortment from "../../assets/pictures/pork-assortment.webp";
import { AssortmentCarouselContainerStyled, AssortmentCarouselItemStyled } from "../styled/wholesale/AssortmentCarouselItem.styled";
import {MobileButtonContainer} from "../styled/wholesale/MobileButtonContainer";

const AssortmentSection = () => {
    const initialVisibleProducts = 3;
    const [visibleIndex, setVisibleIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0); // 1 for next, -1 for prev
    const images = [PoultryAssortment, BeefAssortment, PorkAssortment, PoultryAssortment, BeefAssortment, PorkAssortment];

    const visibleImages = images.slice(visibleIndex, visibleIndex + initialVisibleProducts);

    const handleNext = () => {
        if (visibleIndex + initialVisibleProducts < images.length) {
            setDirection(1);
            setVisibleIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (visibleIndex > 0) {
            setDirection(-1);
            setVisibleIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <AssortmentStyled>
            <AssortmentHeader>
                <h2>Get inspired</h2>
                <ButtonContainer>
                    <IconButton
                        className="assortmentSectionIconButton mobileNone"
                        borderColor="#BEBEBE"
                        borderSize="1px"
                        buttonHeight={70}
                        buttonWidth={70}
                        iconHeight={70}
                        iconWidth={70}
                        onClick={handlePrev}
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
                        onClick={handleNext}
                    >
                        <IoArrowForward className="iconProductSection" />
                    </IconButton>
                </ButtonContainer>
            </AssortmentHeader>
            <MobileButtonContainer>
                <button onClick={handlePrev}></button>
                <button onClick={handleNext}></button>
            </MobileButtonContainer>
            <CarouselV1 x={100} direction={direction} visibleIndex={visibleIndex}>
                <AssortmentCarouselContainerStyled>
                    {visibleImages.map((image, index) => (
                        <AssortmentCarouselItemStyled
                            key={index}
                            src={image}
                            isPrimary={index === 1}
                        />
                    ))}
                </AssortmentCarouselContainerStyled>
            </CarouselV1>
            <button id="becomeClient">Become a client</button>
        </AssortmentStyled>
    );
};

export default AssortmentSection;
