import {render, screen} from "@testing-library/react";
import AllProducts from "../models/response/AllProducts";
import {ThemeProvider} from "styled-components";
import theme from "../components/styled/theme";
import React from "react";
import ProductCard from "../components/global/ProductCard";

describe("ProductCard component", () => {
    test("should render product", () => {
        const product = new AllProducts(
            1,
            "Beef",
            1,
            "kg",
            10.99,
            "https://placehold.co/344x344",
        );
        render(
            <ThemeProvider theme={theme}>
                <ProductCard product={product} />
            </ThemeProvider>
        );

        const productImage = screen.getByRole("img") as HTMLImageElement;
        expect(productImage.src).toBe(product.url);

        const productName = screen.getByText(product.name);
        expect(productName).toBeInTheDocument();

        const quantityUnit = screen.getByText(`${product.quantity} ${product.unit}`);
        expect(quantityUnit).toBeInTheDocument();

        const productPrice = screen.getByText(`€${product.price}`);
        expect(productPrice).toBeInTheDocument()
    })
})