import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ImageSliderProps {
    images: string[];
    title?: string;
}
  
const ImageSlider: React.FC<ImageSliderProps> = ({ images, title }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
  
    return (
        <div className="slider-container">
            {title && <h2 className="slider-container__title">{title}</h2>}
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index} className="slider-container__slide">
                        <img src={imageUrl} alt={`Slide ${index}`} className="slider-container__image" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider
