import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity,Vibration  } from 'react-native';
import React, { useState } from 'react';

const AppProThree = () => {
    let [num,setNum]=useState('one')

    let images ={
  one: require('./assets/one.jpg'),
  two: require('./assets/two.jpg'),
  three: require('./assets/three.jpg'),
  four: require('./assets/four.jpg'),
  five: require('./assets/five.jpg'),
  six: require('./assets/six.jpg'),
    }



let arr=["one","two","three","four","five","six"]

const handleSubmit =()=>{
   Vibration.vibrate(200);
 const random = Math.floor(Math.random()*arr.length)
setNum(arr[random])
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Ludo Dice</Text>
          <Image
          style={styles.image}
          source={images[num]}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.dragBtn}>
                Drag
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default AppProThree;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f4ff',
  },
  container: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    height:170,
    aspectRatio:1/1
  },
  box:{
    gap:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragBtn:{
    backgroundColor:'#4ec3d0ff',
    paddingHorizontal:15,
    paddingVertical:5,
    borderRadius:6,
    fontSize:20

  },
  text:{
    fontSize:30,
  }
});
