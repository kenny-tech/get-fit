import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import GetFitText from './app/components/GetFitText';

const App = () => {

  return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor:'#fff'}}>
          <GetFitText />
      </View>
  );
};


export default App;
