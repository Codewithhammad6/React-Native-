import React from 'react'
import { View,Text,StyleSheet,useColorScheme } from 'react-native'

function AppPro(){
  const isDarkMode = useColorScheme()==='dark'
  return (
    <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
            Home
        </Text>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
            About
        </Text>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
            Contact
        </Text>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
            SignIn
        </Text>
    </View>
  )
}
  
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:20,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent: 'space-around'
  },
  whiteText:{
    color:'#FFFFFF',
  },
  darkText:{
  color:'#000000'
  },
})

export default AppPro
