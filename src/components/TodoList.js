import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export const TodoList = ({todo}) => {    
     return(
        <View>
            <Text style={styles.todo}>{todo.title}</Text> 
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