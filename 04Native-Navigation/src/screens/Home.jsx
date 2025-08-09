import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NativeStackScreenProps } from '@react-navigation/native-stack'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
      title='Go to details'
      onPress={()=>navigation.navigate("Details",{Name:"Hammad Sadiq"})}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}  
})











// replace("ScreenName")
// Replaces the current screen with another screen.The replaced screen is removed from the stack.
// You cannot go back to it.Useful for flows like login → home (you don’t want the login screen in the history).

// 🔝 navigation.popToTop()
// Pops all screens until the first screen in the stack.
// It’s used to go back to the root screen.
// Keeps all screens in the stack until then.










// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// const Home = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text>Home Screenn</Text>
//       <Button
//       title='Go to details'
//       onPress={()=>navigation.replace("Details",{Name:"Hammad Sadiq"})}
//       />
//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
// container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
// }  
// })