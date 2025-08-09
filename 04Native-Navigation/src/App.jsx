// https://reactnavigation.org/docs/getting-started

// npm install @react-navigation/native
// npm install @react-navigation/native-stack  


import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import Home from './screens/Home';
import Details from './screens/Details';


const Stack = createNativeStackNavigator()


const App = () => {
 return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{title:"Trending Products"}}/>
      <Stack.Screen name="Details" component={Details} options={{title:"Product Details"}} />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
