import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TitleText from '../components/TitleText';
import Label from '../components/Label';
import TextBox from '../components/TextBox';
import Button from '../components/Button';
import Space from '../components/Space';

const Signin = () => {
    return (
        <View style={{flex: 1, alignItems:'flex-start', backgroundColor:'#0037BA'}}>
           <TitleText textSize={35} textColor="#FFFFFF" text="Welcome back"/>
           <Label labelTextColor="#FFFFFF" labelText="Sign in to continue" labelSize={18} />
           <View style={{marginLeft: 54, marginRight: 54, marginTop: 60}}></View>
           <TextBox placeholderText={"Full name"} iconName="user" />
           <Space />
           <TextBox placeholderText={"Password"} iconName="lock"/>
           <Label labelTextColor="#FFFFFF" labelText="Forgot password?" labelSize={14} />
           <Space />
           <Button buttonTitle="Sign in" buttonBgColor="#FFF" buttonTextColor="#0037BA"/>
           <View style={{marginBottom: 10}}></View>
           <Button buttonTitle="Connect with Facebook" buttonBgColor="#FFF" buttonTextColor="#0037BA"/>
           <View style={{marginTop: 70}}></View>
           <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{fontSize: 16}}>Don't have an account? </Text><Text style={{fontWeight: 'bold'}}>Sign Up</Text>
           </View>
        </View>
    )
}

export default Signin;