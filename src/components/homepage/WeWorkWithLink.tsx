import React, { useState } from "react";
import WeWorkWithLinkStyled from "../styled/homepage/WeWorkWithLink.styled";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import IconButton from "../styled/global/IconButton";

interface WeWorkWithLinkProps {
    link: string;
    children: React.ReactNode;
}

const WeWorkWithLink: React.FC<WeWorkWithLinkProps> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <WeWorkWithLinkStyled onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={props.link}>{props.children}</Link>
            {isHovered && (
                <IconButton
                    borderColor="black"
                    borderSize="3px"
                    initial={{ rotate: 0}}
                    animate={{ rotate: -50}}
                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                    buttonHeight={120}
                    buttonWidth={120}
                    iconHeight={120}
                    iconWidth={120}
                >
                    <IoArrowForward/>
                </IconButton>
            )}
        </WeWorkWithLinkStyled>
    );
};

export default WeWorkWithLink;
