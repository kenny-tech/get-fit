import React, { useState } from 'react';
import { View, Text } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({ label }) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={{marginLeft: 85, flexDirection: 'row' }}>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                tintColors={{ true: '#F15927', false: 'black' }}
            />
            <Text style={{color: '#000', fontSize: 16, marginTop: 5}}>{label}</Text>
        </View>
    )
}

export default Checkbox;