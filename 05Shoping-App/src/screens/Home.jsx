import {ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import Product from '../components/Product'

const Home = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.container}>
     <Product navigation={navigation}/>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        margin:10,
        borderBottomWidth:1,
        borderBottomColor:'#b5b2b2ff'
    }
})