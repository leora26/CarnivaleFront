import React, {useState} from "react";
import {NavigationItemStyled} from "../styled/nav-footer/NavigationItem.styled";
import {BurgerStyled, NavigationContainer} from "../styled/nav-footer/Burger.styled";

const Burger = () => {
    const [open, isOpen] = useState<boolean>(false)

    const handleClick = () => {
        isOpen((prevState) => !prevState);
    }

    return (
        <>
            <BurgerStyled open={open} onClick={handleClick}>
                <div/>
                <div/>
                <div/>
            </BurgerStyled>
            <NavigationContainer open={open}>
                <NavigationItemStyled fontSizeSmall="2rem" fontSize="2rem" fontWeight={600} color='black'
                                      to="/wholesale">WHOLESALE</NavigationItemStyled>
                <NavigationItemStyled fontSizeSmall="2rem" fontSize="2rem"  fontWeight={600} color='black' to="/shop">SHOP</NavigationItemStyled>
                <NavigationItemStyled fontSizeSmall="2rem" fontSize="2rem" fontWeight={600} color='black'
                                      to="/corporate">CORPORATE</NavigationItemStyled>
                <NavigationItemStyled fontSizeSmall="2rem" fontSize="2rem" fontWeight={600} color='black' to="/stories">STORIES</NavigationItemStyled>
            </NavigationContainer>
        </>
    )
}

export default Burger;