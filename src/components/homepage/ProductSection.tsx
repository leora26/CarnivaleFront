import React, { useState } from "react";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";
import ProductPicture from "../../assets/pictures/product-section.png";
import AllProducts from "../../models/AllProducts";
import { Container, ProductsContainer } from "../styled/homepage/ProductSection.styled";
import IconButton from "../styled/global/IconButton";
import { motion } from "framer-motion";
import ProductCard from "../global/ProductCard";

const ProductSection: React.FC = () => {
    const initialVisibleProducts = 4;
    const [visibleIndex, setVisibleIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0); // 1 for next, -1 for prev

    const data: AllProducts[] = [
        {
            id: 1,
            name: "Product 1",
            quantity: 10,
            unit: "kg",
            price: 100.0,
            url: "https://placehold.co/344x344"
        },
        {
            id: 2,
            name: "Product 2",
            quantity: 20,
            unit: "kg",
            price: 200.0,
            url: "https://placehold.co/344x344"
        },
        {
            id: 3,
            name: "Product 3",
            quantity: 30,
            unit: "kg",
            price: 300.0,
            url: "https://placehold.co/344x344"
        },
        {
            id: 4,
            name: "Product 4",
            quantity: 40,
            unit: "kg",
            price: 400.0,
            url: "https://placehold.co/344x344"
        },
        {
            id: 5,
            name: "Product 5",
            quantity: 50,
            unit: "kg",
            price: 500.0,
            url: "https://placehold.co/344x344"
        },
        {
            id: 6,
            name: "Product 6",
            quantity: 60,
            unit: "kg",
            price: 600.0,
            url: "https://placehold.co/344x344"
        }
    ];

    const visibleProducts = data.slice(visibleIndex, visibleIndex + initialVisibleProducts);

    const handleNext = () => {
        let visibleElements: number;
        if (window.innerWidth <= 1024) {
            visibleElements = 1;
        } else if (window.innerWidth <= 1600) {
            visibleElements = 2;
        } else {
            visibleElements = 3;
        }
        if (visibleIndex + visibleElements < data.length) {
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
        <ProductsContainer>
            <Container direction="row" containerHeight="10%" containerWidth="100%">
                <h2>Webshop for homes</h2>
                <Container id="buttonContainer" direction="row" containerHeight="100%" containerWidth="14%">
                    <IconButton
                        className="productSectionIconButton"
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
                        className="productSectionIconButton"
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
                </Container>
            </Container>
            <Container direction="row" containerHeight="90%" containerWidth="100%">
                <img src={ProductPicture} alt="" />
                <motion.div
                    key={visibleIndex}
                    initial={{ x: direction * 100}}
                    animate={{ x: 0}}
                    exit={{ x: direction * -100}}
                    transition={{ duration: 0.5 }}
                    style={{ display: "flex", width: "100%" }}
                >
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </motion.div>
            </Container>
        </ProductsContainer>
    );
};

export default ProductSection;
