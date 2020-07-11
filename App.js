import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// components
import { Navbar } from './src/components/navbar'
import { AddTodo } from './src/components/AddTodo'
import { TodoList } from './src/components/TodoList'
// React Native elements
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
          <TodoList todos={todos}/>
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
