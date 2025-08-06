// npm install formik yup

import React from 'react';
import { View, Text, TextInput,StatusBar, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Yup validation schema
const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters'),

  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

export default function AppProTwo() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
       <StatusBar
            // hidden
            translucent
              barStyle="light-content"
              backgroundColor="#5d8bd0d4"
            />
      <View style={styles.card}>
        <Text style={styles.heading}>Create Account</Text>

        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={schema}
          onSubmit={(values, { resetForm }) => {
            alert('Registration Successful!');
            resetForm();
          }}
        >
          {({ handleChange,handleBlur, handleSubmit, values, errors, touched }) => (
         <>
              {/* Name */}
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
              />
              {touched.name && errors.name && <Text style={styles.errorBox}>{errors.name}</Text>}

              {/* Email */}
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                keyboardType="email-address"
              />
              {touched.email && errors.email && <Text style={styles.errorBox}>{errors.email}</Text>}

              {/* Password */}
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry
              />
              {touched.password && errors.password && (
                <Text style={styles.errorBox}>{errors.password}</Text>
              )}

              {/* Submit */}
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#eef2f3',
    padding: 20,
    justifyContent: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#4c5156a6',
    padding: 14,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16
  },
  errorBox: {
    backgroundColor: '#ffe6e6',
    color: '#d9534f',
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
    fontSize: 14
  },
  button: {
    backgroundColor: '#4a90e2',
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});
