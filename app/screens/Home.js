import React from 'react';
import { View } from 'react-native';

import TitleText from '../components/TitleText';
import Button from '../components/Button';
import Label from '../components/Label';
 
const Home = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
            <TitleText textSize={48} textColor="#0037BA"/>
            <Button buttonTitle="Get Started" buttonBgColor="#0037BA"/>
            <Label labelTextColor="#0037BA" labelText="Sign in" labelSize={18} />
        </View>
    )
}

export default Home;