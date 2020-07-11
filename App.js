import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Navbar} from './src/components/navbar'

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Navbar title="Todo App"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
 
});
