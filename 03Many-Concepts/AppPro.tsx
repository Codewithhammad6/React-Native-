// npm install @react-native-clipboard/clipboard

import {
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  Alert,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

export default function AppPro() {
  const [isLowercase, setIsLowercase] = useState(true);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(false);
  const [length, setLength] = useState();
  const [box, setBox] = useState(false);
  const [textToCopy, setTextToCopy] = useState('');

  const passwordGenerate = () => {
    let characters = '';

    if (isLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (isUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (isNumber) characters += '0123456789';
    if (isSymbol) characters += '~!@#$%^&*`?/:';

    if (characters.length === 0) {
      Alert.alert('Select at least one option');
      return;
    }
    const passLength = parseInt(length) || 8;

    if (passLength <= 0) {
      Alert.alert('Enter a valid password length');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setTextToCopy(generatedPassword);
    setBox(true);
  };

  const passwordReset = () => {
    setBox(false);
    setLength('');
    setIsLowercase(true);
    setIsUppercase(false);
    setIsNumber(true);
    setIsSymbol(false);
  };

  const copyToClipboard = () => {
    Clipboard.setString(textToCopy);
    Alert.alert('Copied!', 'Text has been copied to clipboard.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Generator</Text>

      <View style={styles.box}>
        <Text style={styles.text}>Password Length</Text>
        <TextInput
          placeholder="Ex.8"
          keyboardType="numeric"
          style={styles.input}
          value={length}
          onChangeText={text => setLength(text)}
        />
      </View>

      <View style={styles.boxOne}>
        <View style={styles.conditions}>
          <Text style={styles.text}>Include Lowercase letters</Text>
          <TouchableOpacity
            style={[styles.checkbox1, isLowercase && styles.checked1]}
            onPress={() => setIsLowercase(!isLowercase)}
          >
            {isLowercase && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>

        <View style={styles.conditions}>
          <Text style={styles.text}>Include Uppercase letters</Text>
          <TouchableOpacity
            style={[styles.checkbox2, isUppercase && styles.checked2]}
            onPress={() => setIsUppercase(!isUppercase)}
          >
            {isUppercase && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>

        <View style={styles.conditions}>
          <Text style={styles.text}>Include Numbers</Text>
          <TouchableOpacity
            style={[styles.checkbox3, isNumber && styles.checked3]}
            onPress={() => setIsNumber(!isNumber)}
          >
            {isNumber && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>

        <View style={styles.conditions}>
          <Text style={styles.text}>Include Symbols</Text>
          <TouchableOpacity
            style={[styles.checkbox4, isSymbol && styles.checked4]}
            onPress={() => setIsSymbol(!isSymbol)}
          >
            {isSymbol && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={passwordGenerate}>
          <Text style={styles.genBtn}>Generate</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={passwordReset}>
          <Text style={styles.resBtn}>Reset</Text>
        </TouchableOpacity>
      </View>

      {box && (
        <View style={styles.passBox}>
          <Text style={styles.msg}>Long press to copy</Text>
          <TouchableOpacity onLongPress={copyToClipboard}>
            <Text style={styles.passtext}>{textToCopy}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    margin: 20,
    marginTop: 35,
  },
  heading: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    width: 90,
    paddingHorizontal: 12,
    borderRadius: 6,
    color: 'white',
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxOne: {
    marginVertical: 40,
    gap: 15,
  },
  conditions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox1: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#69dc72ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 29,
  },
  checked1: {
    backgroundColor: '#29ac4eff',
    borderColor: '#29ac4eff',
    borderRadius: 29,
  },
  checkbox2: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#3aa6dcff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 29,
  },
  checked2: {
    backgroundColor: '#3aa6dcff',
    borderColor: '#3aa6dcff',
    borderRadius: 29,
  },
  checkbox3: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#dc69cfff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 29,
  },
  checked3: {
    backgroundColor: '#dc69cfff',
    borderColor: '#dc69cfff',
    borderRadius: 29,
  },
  checkbox4: {
    width: 28,
    height: 28,
    borderWidth: 2,
    borderColor: '#c7dc69ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 29,
  },
  checked4: {
    backgroundColor: '#9ab038ff',
    borderColor: '#9ab038ff',
    borderRadius: 29,
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genBtn: {
    backgroundColor: '#266bd9ff',
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 7,
    textAlign: 'center',
    color: 'white',
    width: 120,
  },
  resBtn: {
    backgroundColor: '#9ca6b5ff',
    fontSize: 20,
    borderRadius: 5,
    paddingVertical: 7,
    textAlign: 'center',
    color: 'white',
    width: 120,
  },
  passBox: {
    marginVertical: 30,
    backgroundColor: '#b8b4b481',
    padding: 20,
    borderRadius: 8,
  },
  msg: {
    fontSize: 16,
    color: '#faf2f2ff',
  },
  passtext: {
    textAlign: 'center',
    marginVertical: 12,
    fontSize: 25,
  },
});
