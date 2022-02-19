import React from 'react';
import { View } from 'react-native';

import HomeScreen from './app/screens/Home';

const App = () => {

  return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
         <HomeScreen />
      </View>
  );
};


export default App;
