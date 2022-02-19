import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from '../styles/style';

const Button = ({ buttonTitle, buttonBgColor }) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor, marginTop: 12}]}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default Button;