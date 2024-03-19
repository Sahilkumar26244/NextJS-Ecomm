import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1260px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                
                 <img src="/p2.webp" />
                <img src="/p3.webp" />
                <img src="/p4.webp" />
                <img src="/p5.webp" />
                <img src="/p6.webp" />
                <img src="/p7.webp" /> 
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;