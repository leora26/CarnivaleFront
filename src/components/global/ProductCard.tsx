import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import AllProducts from "../../models/response/AllProducts";
import {Container, ProductCardStyled} from "../styled/global/ProductCard.styled";
import IconButton from "../styled/global/IconButton";



const ProductCard: React.FC<{ product: AllProducts}> = (props) => {
    return (
        <ProductCardStyled>
            <img src={props.product.url} alt="Product"/>
            <h3>{props.product.name}</h3>
            <span>{props.product.quantity} {props.product.unit}</span>

            <Container>
                <h4>€{props.product.price}</h4>
                <IconButton
                    className="productSectionIconButton"
                    borderColor="black"
                    borderSize="1px"
                    buttonHeight={60}
                    buttonWidth={60}
                    iconHeight={40}
                    iconWidth={40}
                ><AiOutlinePlus className="iconProductCard" /></IconButton>
            </Container>
        </ProductCardStyled>
    )
}

export default ProductCard;