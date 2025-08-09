// // npm install react-native-haptic-feedback


// import React from 'react';
// import { Button, View } from 'react-native';
// import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// const AppProFour = () => {

//   const triggerHaptic = () => {
//     const options = {
//       enableVibrateFallback: true,
//       ignoreAndroidSystemSettings: false
//     };
//   ReactNativeHapticFeedback.trigger("impactHeavy", options);
//   };

//   return (
//     <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
//       <Button title="Press Me" onPress={triggerHaptic} />
//     </View>
//   );
// };

// export default AppProFour;











//                 Below concepts

// data={data}     iskay andar aray hain or aray may 10 object    
//renderItem={renderItem}     ya us data kay har object ko  yah pass krta ha   
//const renderItem = ({ item }) 



//               Get array of 10 objects

// const data = [];

// for (let i = 0; i < 10; i++) {
//   data.push({
//     id: i.toString(),
//     name: `Item ${i + 1}`,
//   });
// }






import React from 'react';
import { FlatList, Text, View } from 'react-native';

const AppProFour = () => {
  const data = Array.from({ length: 10 },(_, i)=>({ 
    id: i.toString(),
   name: `Item ${i + 1}`
   }));

  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1 }}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
    // numColumns={4}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default AppProFour;








