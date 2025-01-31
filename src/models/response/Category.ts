import CategoryCard from "../../components/styled/homepage/CategoryCard";
import {dummyCategories} from "../dataFaker";
import React from "react";

class Category {
    constructor(
        public id: string,
        public titleEn: string,
        public titleNl: string,
        public titleFr: string,
        public descriptionEn: string,
        public descriptionNl: string,
        public descriptionFr: string,
        public imgUrl: string
    ) {
    }
}

export default Category;