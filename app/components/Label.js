import React from 'react';
import { Text } from 'react-native';

import styles from '../styles/style';

const Label = ({ labelText, labelTextColor }) => {
    return (
        <Text style={[styles.label, {color: labelTextColor}]}>{labelText}</Text>
    )
}

export default Label;