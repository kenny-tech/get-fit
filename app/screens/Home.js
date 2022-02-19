import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import TitleText from '../components/TitleText';
import Button from '../components/Button';
import Label from '../components/Label';
 
const Home = ({ navigation }) => {
    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
            <TitleText textSize={48} textColor="#0037BA" text="Get-Fit" alignText="flex-start"/>
            <View style={{marginBottom: 300}}></View>
            <Button buttonTitle="Get Started" buttonBgColor="#0037BA" buttonTextColor="#FFFFFF"/>
            <View style={{marginTop: 10}}></View>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Label labelTextColor="#0037BA" labelText="Sign in" labelSize={18} />
            </TouchableOpacity>
        </View>
    )
}

export default Home;