import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import Line from '../components/Line';
import Checkbox from '../components/Checkbox';
import PriceRange from '../components/PriceRange';

const Wishlist = () => {

    const [values, setValues] = useState([10, 1000]);

    const multiSliderValuesChange = (values) => {
        setValues(values);
    }

    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#FFF'}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: '#000', marginLeft: 33, marginTop: 10, marginRight: 200}}>Filters</Text>
                <Text style={{fontSize: 20, color: '#000', marginTop: 10, marginHorizontal: 20}}>Reset</Text>
            </View>
            <Line />
            <View>
                <Text style={{fontSize: 20, color: '#000', marginLeft: 33, marginTop: 10, marginRight: 200, fontWeight: '300', lineHeight: 30}}>Size</Text>
                <View style={{marginLeft: 50}}>
                    <Checkbox label="X Small"/>
                    <Checkbox label="Small"/>
                    <Checkbox label="Medium"/>
                    <Checkbox label="Large"/>
                    <Checkbox label="X Large"/>
                </View>
            </View>
            <View>
                <Text style={{fontSize: 20, color: '#000', marginLeft: 33, marginTop: 10, marginRight: 200, fontWeight: '300', lineHeight: 30}}>Price</Text>
                <View style={{marginLeft: 33}}>
                    <MultiSlider
                        values={[values[0], values[1]]}
                        sliderLength={280}
                        onValuesChange={multiSliderValuesChange}
                        min={0}
                        max={1000}
                        step={100}
                    />
                    <Text style={{color: '#000'}}>{values[0]}</Text>
                    <Text style={{color: '#000'}}>{values[1]}</Text>
                </View>
            </View>
        </View>
    )
}

export default Wishlist;