import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoList = ({todo, onRemove}) => {    
     return(
         <TouchableOpacity 
            onPress={() => console.log('Pressed', todo.id)}
            onLongPress={() => onRemove(todo.id)}>
            <View>
                <Text style={styles.todo}>{todo.title}</Text> 
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 3
    }
})