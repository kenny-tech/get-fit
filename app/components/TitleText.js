import React from 'react';
import { Text } from 'react-native';

import styles from '../styles/style';

const TitleText = ({ textSize, textColor  }) => {
    return (
        <Text style={[styles.titleText, {fontSize: textSize, color: textColor}]}>Get-Fit</Text>        
    )
}

export default TitleText;