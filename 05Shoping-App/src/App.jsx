// npm install @react-navigation/native-stack
// npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens 
import Home from './screens/Home';
import Details from './screens/Details';

const Stack = createNativeStackNavigator()

const App = () => {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{title:"Trending Products"}}/>
      <Stack.Screen name="Details" component={Details} options={{title:"Product Details"}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;













// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // screens 
// import Home from './screens/Home';
// import Details from './screens/Details';
// import Login from './screens/Login';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [isauth, setAuth] = useState(false);

//   return (
//     <NavigationContainer>
//       {isauth ? (
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen 
//             name="Home" 
//             component={Home} 
//             options={{ title: "Trending Products" }} 
//           />
//           <Stack.Screen 
//             name="Details" 
//             component={Details} 
//             options={{ title: "Product Details" }} 
//           />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen 
//             name="Login" 
//             component={Login} 
//             options={{ title: "Login" }} 
//           />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };

// export default App;

