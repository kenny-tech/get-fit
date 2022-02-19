import React from 'react';
import { Text } from 'react-native';

import styles from '../styles/style';

const TitleText = ({ textSize, textColor, text  }) => {
    return (
        <Text style={[styles.titleText, {fontSize: textSize, color: textColor}]}>{text}</Text>        
    )
}

export default TitleText;