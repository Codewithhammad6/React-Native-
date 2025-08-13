import React, { useState, useRef, useEffect } from 'react';
import { 
  View,   
  Text, 
  TouchableOpacity, 
  StyleSheet,
  Animated,
  Pressable
} from 'react-native'; 
 
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const slideAnim = useRef(new Animated.Value(-250)).current; // menu starts off-screen
  const [hovered, setHovered] = useState(null);


  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: showMenu ? 0 : -250,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showMenu]);

  const menuItems = ['Home', 'Contact', 'About', 'SignIn'];

  return (
    <View style={{ flex: 1 }}>
      {/* NAVBAR */}
      <View style={styles.nav}>
        <Text style={styles.appName}>App</Text>
        <TouchableOpacity onPress={() => setShowMenu(true)}>
          <Text style={styles.menuText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {/* PAGE CONTENT */}
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        repudiandae, ad consequuntur expedita placeat cupiditate, laudantium
        optio illum delectus, a eligendi quam iusto eum. Assumenda velit nobis
        delectus optio laborum!
      </Text>

      {/* BACKGROUND BLUR OVERLAY */}
      {showMenu && (
        <Pressable style={styles.overlay} onPress={() => setShowMenu(false)} />
      )}

      {/* SLIDING MENU */}
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {/* CLOSE BUTTON */}
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowMenu(false)}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        {/* MENU OPTIONS */}
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => alert(item)}
            onPressIn={() => setHovered(index)}
            onPressOut={() => setHovered(null)}
          >
            <Text
              style={[
                styles.option,
                hovered === index && styles.optionHover,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 12,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuText: {
    fontSize: 16,
    color: '#0077b6',
  },
  lorem: {
    paddingHorizontal: 20,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000070',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: 250,
    backgroundColor: '#a4e8e8fc',
    paddingTop: 40,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#333',
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    borderRadius: 8,
    textAlign: 'center',
    backgroundColor: '#ffffff20',
    marginTop: 10,
  },
  optionHover: {
    backgroundColor: '#0077b6',
    color: '#fff',
  },
});

export default App;
