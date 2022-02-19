import React from 'react';
import { View } from 'react-native';

import TitleText from '../components/TitleText';
import Button from '../components/Button';
import Label from '../components/Label';

const Home = () => {
    return (
        <View>
            <TitleText />
            <Button buttonTitle="Get Started" buttonBgColor="#0037BA"/>
            <Label labelTextColor="#0037BA" labelText="Sign in" />
        </View>
    )
}

export default Home;