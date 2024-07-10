import React, {useState} from "react";
import {IoArrowBackSharp, IoArrowForward} from "react-icons/io5";
import ProductPicture from "../assets/pictures/product-section.png";
import AllProducts from "../models/AllProducts";
import ProductCard from "./ProductCard";
import {Container, ProductsContainer} from "./styled/ProductSection.styled";
import IconButton from "./styled/IconButton";

const ProductSection: React.FC = () => {
    const initialVisibleProducts = 4; // Initial number of visible products
    const [visibleIndex, setVisibleIndex] = useState<number>(0); // Index of the first visible product

    const data: AllProducts[] = [
        {
            "id": 1,
            "name": "Product 1",
            "quantity": 10,
            "unit": "kg",
            "price": 100.0,
            "url": "https://placehold.co/344x344"
        },
        {
            "id": 2,
            "name": "Product 2",
            "quantity": 20,
            "unit": "kg",
            "price": 200.0,
            "url": "https://placehold.co/344x344"
        },
        {
            "id": 3,
            "name": "Product 3",
            "quantity": 30,
            "unit": "kg",
            "price": 300.0,
            "url": "https://placehold.co/344x344"
        },
        {
            "id": 4,
            "name": "Product 4",
            "quantity": 40,
            "unit": "kg",
            "price": 400.0,
            "url": "https://placehold.co/344x344"
        },
        {
            "id": 5,
            "name": "Product 5",
            "quantity": 50,
            "unit": "kg",
            "price": 500.0,
            "url": "https://placehold.co/344x344"
        },
        {
            "id": 6,
            "name": "Product 6",
            "quantity": 60,
            "unit": "kg",
            "price": 600.0,
            "url": "https://placehold.co/344x344"
        }
    ];

    const visibleProducts = data.slice(visibleIndex, visibleIndex + initialVisibleProducts);

    const handleNext = () => {
        if (visibleIndex + 3 < data.length) {
            setVisibleIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (visibleIndex > 0) {
            setVisibleIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <ProductsContainer>
            <Container direction="row" containerHeight="10%" containerWidth="100%">
                <h2>for everyday use</h2>
                <Container id="buttonContainer" direction="row" containerHeight="100%" containerWidth="10%">
                    <IconButton
                        buttonHeight="70px"
                        buttonWidth="70px"
                        iconHeight="70px"
                        iconWidth="70px"
                        onClick={handlePrev}
                    ><IoArrowBackSharp className="iconProductSection"/></IconButton>
                    <IconButton
                        buttonHeight="70px"
                        buttonWidth="70px"
                        iconHeight="70px"
                        iconWidth="70px"
                        onClick={handleNext}><IoArrowForward className="iconProductSection"/></IconButton>
                </Container>
            </Container>
            <Container direction="row" containerHeight="90%" containerWidth="100%">
                <img src={ProductPicture} alt=""/>
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </Container>
        </ProductsContainer>
    );
};

export default ProductSection;
