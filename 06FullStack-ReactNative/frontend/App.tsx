import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import useStore from './store/userStore'
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {

  const {isAuth,getUser,loaded} = useStore()

  useEffect(()=>{
getUser()
  },[getUser])

  if(!loaded){
    return(
<View style={styles.container}>
  <Text style={styles.text}>Loading...</Text>
</View>
    )
  }



  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {isAuth ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                  title: 'My Profile',
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',
alignItems:'center',
  },
  text:{
    color:'white',
    fontSize:27,
  }
})

export default App;