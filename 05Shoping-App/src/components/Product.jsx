import { Image, StyleSheet, FlatList, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Product = ({navigation}) => {
  // Sample data array
  const data = [
    {
      id: '1',
      rating: '4.7',
      users: '(8,794)',
      oldPrice: '79,990',
      price: '65,999',
      off: '17',
      image: require('../assets/one.png'),
    },
    {
      id: '2',
      rating: '4.8',
      users: '(8,972)',
      oldPrice: '89,900',
      price: '75,999',
      off: '15',
      image: require('../assets/two.png'),
    },
    {
      id: '3',
      rating: '4.4',
      users: '(7,826)',
      oldPrice: '79,900',
      price: '66,999',
      off: '16',
      image: require('../assets/three.png'),
    },
    {
      id: '4',
      rating: '4.9',
      users: '(180,267)',
      oldPrice: '43,900',
      price: '38,999',
      off: '11',
      image: require('../assets/four.png'),
    },
  ];

  // Function to render each item
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("Details", { product: item })}>
    <View style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />
      </View>

      <View style={styles.info}>
        <View style={styles.first}>
          <Text style={styles.rating}>{item.rating}★</Text>
          <Text style={styles.userRat}>{item.users}</Text>
        </View>

        <View style={styles.second}>
          <Text style={styles.prePrice}>₹{item.oldPrice}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
          <Text style={styles.off}>%{item.off} off</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data} // The array of items
        renderItem={renderItem} // How each item looks
        keyExtractor={item => item.id} // Unique key for each item
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#9f9a9aff',
    paddingBottom: 15,
  },
  image: {
    height: 130,
    aspectRatio: 10 / 14,
  },
  info: {
    marginTop: 20,
    marginHorizontal: 15,
    gap: 10,
  },
  first: {
    flexDirection: 'row',
    gap: 5,
  },
  second: {
    flex: 1,
    flexDirection: 'row',
    gap: 3,
  },
  rating: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  userRat: {
    color: '#7c7b7ba9',
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
});
