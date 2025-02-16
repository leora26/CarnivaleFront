import {FAQCategories, FAQCategory, FAQContainer, FAQSectionStyled} from "../styled/wholesale/FAQSection.styled";
import useFetchFAQ from "../../hooks/useFetchFAQ";
import {useEffect, useState} from "react";
import QuestionAnswer from "../../models/response/QuestionAnswer";
import FAQItem from "./FAQItem";

const FAQSection = () => {

    const {data: faqs} = useFetchFAQ();
    const [selectedCategory, setSelectedCategory] = useState('ABOUT_US');
    const [filteredFAQs, setFilteredFAQs] = useState<QuestionAnswer[] | null>(null);


    const categories = [
        { name: 'ABOUT_US', display: 'About us' },
        { name: 'DELIVERY', display: 'Delivery' },
        { name: 'PRODUCTS', display: 'Products' },
    ];

    useEffect(() => {
        console.log(faqs)
        if (faqs) {
            switch (selectedCategory) {
                case 'ABOUT_US':
                    setFilteredFAQs(faqs.aboutUs);
                    break;
                case 'DELIVERY':
                    setFilteredFAQs(faqs.delivery);
                    break;
                case 'PRODUCTS':
                    setFilteredFAQs(faqs.products);
                    break;
            }
        }
    }, [faqs, selectedCategory]);

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName);
    }

    return (
        <FAQSectionStyled>

            <h3>frequently asked questions</h3>

            <FAQCategories>
                {categories.map((category) => (
                    <FAQCategory
                        key={category.name}
                        isSelected={selectedCategory === category.name}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        {category.display}
                    </FAQCategory>
                ))}
            </FAQCategories>

            <FAQContainer>
                {filteredFAQs && filteredFAQs.map((faq) => (
                    <FAQItem faq={faq} />
                ))}
            </FAQContainer>
        </FAQSectionStyled>
    )
}

export default FAQSection;