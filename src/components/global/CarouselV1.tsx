import React from "react";
import Carousel from "react-multi-carousel";

interface CarouselProps {
    imgUrl: string;
    title: string;
    subtitle: string;
}

const CarouselV1: React.FC<CarouselProps> = (props) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40,
        },
    };

    return (
        <Carousel
            responsive={responsive}
            centerMode={true}
            infinite={true}
            focusOnSelect={true}
            customTransition="transform 300ms ease-in-out"
        >
            {/*{props.map((item) => (*/}
            {/*    <div*/}
            {/*        key={item.id}*/}
            {/*        className="carousel-item"*/}
            {/*        style={{ padding: "20px", textAlign: "center" }}*/}
            {/*    >*/}
            {/*        {item.content}*/}
            {/*    </div>*/}
            {/*))}*/}
        </Carousel>
    );
}

export default CarouselV1;