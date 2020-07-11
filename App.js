import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// components
import { Navbar } from './src/components/navbar'
import { AddTodo } from './src/components/AddTodo'
import { TodoList } from './src/components/TodoList'
// React Native elements
import { FlatList, ScrollView ,StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [inpValue, setInpValue] = useState('')
  const [todos, setTodos] = useState([])
  const onChangeInput = (text) => {
    setInpValue(text)
  }

  const btnPress = () => {
    const newTodos = {
      id: Date.now().toString(),
      title: inpValue
    }
    // check if inpValue has some data in it 
    if(inpValue.trim()){
      setTodos(prev => [...prev, newTodos])
      setInpValue('')
    } else {
      // With Alert.alert() from React Native
      //  we can throw error
      Alert.alert('Enter data about task')
    }
  }

  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo 
          inpValue={inpValue}
          btnPress={btnPress} 
          onChangeInput={onChangeInput}/>
        <FlatList
          data={todos}
          // don't forget to distruct item like argument
          renderItem={({item})=>(<TodoList todo={item}/>)}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },

});
