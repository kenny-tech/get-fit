import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
 
const ImageSlider = ({ sliderImages }) => {

    return (
        <SliderBox images={sliderImages} />
    )
}

export default ImageSlider;