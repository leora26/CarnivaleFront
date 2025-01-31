import {CategoriesSectionStyled} from "../styled/homepage/CategoriesSection.styled";
import CategoryCard from "../styled/homepage/CategoryCard";
import BeefCategory from "../../assets/pictures/category-beef.png";
import DairyCategory from "../../assets/pictures/category-dairy.png";
import PoultryCategory from "../../assets/pictures/category-poultry.png";
import React, {useContext, useEffect, useState} from "react";
import {HomepageContext} from "../../context/HomepageContext";
import Category from "../../models/response/Category";
import {dummyCategories} from "../../models/dataFaker";

const CategoriesSection = () => {

    const [categories, setCategories] = useState<Category[] | null>(null)
    const images = [BeefCategory, DairyCategory, PoultryCategory];

    const homepageInfo = useContext(HomepageContext);

    useEffect(() => {
        if(homepageInfo?.homepageInfo?.categoryDTOs) {
            setCategories(homepageInfo.homepageInfo.categoryDTOs)
        }
    }, [homepageInfo]);

    return (
        <CategoriesSectionStyled>
            <h2 id="whatDoWeHave">what do we have?</h2>
            {categories ? categories.map(category => (
                <CategoryCard to={`/stories/tag/${category.titleEn}`}>
                    <img src={category.imgUrl} alt={`${category.titleEn} category link`}/>
                    <h3>{category.titleEn}</h3>
                    <p>
                        {category.descriptionEn}
                    </p>
                </CategoryCard>
            )) : dummyCategories.map((category, index) =>(
                <CategoryCard to={`/stories/tag/${category.titleEn}`}>
                    <img src={images[index]} alt={`${category.titleEn} category link`}/>
                    <h3>{category.titleEn}</h3>
                    <p>
                        {category.descriptionEn}
                    </p>
                </CategoryCard>
            ))}
        </CategoriesSectionStyled>
    )
}

export default CategoriesSection;