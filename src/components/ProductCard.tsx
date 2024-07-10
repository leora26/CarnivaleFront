import React from "react";
import AllProducts from "../models/AllProducts";
import {Container, ProductCardStyled} from "./styled/ProductCard.styled";
import { AiOutlinePlus } from "react-icons/ai";
import IconButton from "./styled/IconButton";



const ProductCard: React.FC<{ product: AllProducts}> = (props) => {
    return (
        <ProductCardStyled>
            <img src={props.product.url} alt="Product picture"/>
            <h3>{props.product.name}</h3>
            <span>{props.product.quantity} {props.product.unit}</span>

            <Container>
                <h4>€{props.product.price}</h4>
                <IconButton
                    buttonHeight="60px"
                    buttonWidth="60px"
                    iconHeight="40px"
                    iconWidth="40px"
                ><AiOutlinePlus className="iconProductCard" /></IconButton>
            </Container>
        </ProductCardStyled>
    )
}

export default ProductCard;