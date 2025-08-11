import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const Details = ({route}) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View >
        <Image 
        source={product.image}
        />
        <View style={styles.box}>
              <View style={styles.first}>
                 <Text style={styles.rating}>{product.rating}★</Text>
                 <Text style={styles.userRat}>{product.users} ratings</Text>
               </View>

              <View style={styles.second}>
                       <Text style={styles.off}>%{product.off} off</Text>
                       <Text style={styles.prePrice}>₹{product.oldPrice}</Text>
                       <Text style={styles.price}>₹{product.price}</Text>
                     </View>

                     <View style={styles.info}>

                      <View style={styles.detailBox}>
                      <Text style={styles.detailText}>12MP Front Camera</Text>
                      </View>

                      <View style={styles.detailBox}>
                      <Text style={styles.detailText}>12MP Dual Rear Camera</Text>
                      </View>

                      <View style={styles.detailBox}>
                      <Text style={styles.detailText}>15.49 cm (6.1 inch) Super Retina XDR Display</Text>
                      </View>

                     </View>

        </View>
       
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
    first: {
    flexDirection: 'row',
    gap: 5,
    marginTop:50
  },
    rating: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
    userRat: {
    color: '#7c7b7bfd',
  },
  box:{
    gap:10
  },
  second:{
backgroundColor:'#4a9a644a',
paddingHorizontal:16,
flexDirection:'row',
paddingVertical:15,
borderRadius:10,
gap:7
  },
    prePrice: {
    textDecorationLine: 'line-through',
    color: '#7c7b7ba9',
    fontSize: 17,
    fontWeight: '600',
  },
  price: {
    fontSize: 17,
    fontWeight: '600',
  },
  off: {
    color: 'green',
    fontSize: 15,
    fontWeight: '600',
  },
  info:{
gap:7
  },
  detailBox:{
    borderColor:"black",
    borderWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRadius:5,
    paddingHorizontal:5,
    paddingVertical:2,
    
  },
  detailText:{
    fontSize:14
  }
});
