import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export const TodoList = ({todos}) => {
    const list = todos.map((el) => <Text style={styles.todo} key={el.id}>{el.title}</Text>)
    
    return(
        <View >
           {list} 
        </View>
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