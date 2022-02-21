import React from 'react';
import RangeSlider from 'react-native-range-slider';

const Range = () => {

    return (
        <RangeSlider
            min={100}
            max={1000}
            tintColor="#ecf0f1"
            handleColor="#f368e0"
            handlePressedColor="#f368e0"
            tintColorBetweenHandles="#ff9ff3"
        />
    )
}

export default Range;