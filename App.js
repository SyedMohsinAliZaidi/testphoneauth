import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigations/Navigator';

const App = ()=>{
  return(
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App;