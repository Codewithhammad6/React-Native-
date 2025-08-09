import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route,navigation}) => {

  const {Name} =  route.params

  return (
    <View style={styles.container}>
      <Text>Details</Text>
       <Text>{Name}</Text> 
      <Button
      title='Go to home'
      onPress={()=>navigation.navigate("Home")}
      />
      <Button
      // title='Go Back To Previous'                 // from stack it delete previous 10 screens
      // onPress={()=>navigation.pop(10)}
      title='Go Back To First Screen'              // from stack it delete previous all screens
      onPress={()=>navigation.popToTop()}
      />
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}  
})














// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// const Details = ({route,navigation}) => {

//   const {Name} =  route.params

//   return (
//     <View style={styles.container}>
//       <Text>Details</Text>
//        <Text>{Name}</Text> 
//       <Button
//       title='Go to home'
//       onPress={()=>navigation.replace("Home")}
//       />
//       <Button
//       title='Go Back To First Screen'              // from stack it delete previous all screens
//       onPress={()=>navigation.replace("Home")}
//       />
//     </View>
//   )
// }

// export default Details

// const styles = StyleSheet.create({
// container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
// }  
// })