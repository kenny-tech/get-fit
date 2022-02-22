import React from 'react';

import { View, Text } from 'react-native';
import Line from '../components/Line';
import Checkbox from '../components/Checkbox';

const Wishlist = () => {

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
        </View>
    )
}

export default Wishlist;