import {CategoriesContainer, CategoriesSectionStyled} from "../styled/homepage/CategoriesSection.styled";
import CategoryCard from "../styled/homepage/CategoryCard";
import React, {useContext, useEffect, useState} from "react";
import {HomepageContext} from "../../context/HomepageContext";
import Category from "../../models/response/Category";

const CategoriesSection = () => {

    const [categories, setCategories] = useState<Category[] | null>(null)

    const homepageInfo = useContext(HomepageContext);

    useEffect(() => {
        if(homepageInfo?.homepageInfo?.categoryDTOs) {
            setCategories(homepageInfo.homepageInfo.categoryDTOs)
        }
    }, [homepageInfo]);

    return (
        <CategoriesSectionStyled>
            <h2>what do we have?</h2>
            <CategoriesContainer>
                {categories && categories.map(category => (
                    <CategoryCard to={`/stories/tag/${category.titleEn}`}>
                        <img src={category.imgUrl} alt={`${category.titleEn} category link`}/>
                        <h3>{category.titleEn}</h3>
                        <p>
                            {category.descriptionEn}
                        </p>
                    </CategoryCard>
                ))}
            </CategoriesContainer>
        </CategoriesSectionStyled>
    )
}

export default CategoriesSection;