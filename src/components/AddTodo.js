import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export const AddTodo = ({inpValue,onChangeInput, btnPress}) => {
    return(

        <View style={styles.block}>
            <TextInput 
                value={inpValue}
                style={styles.inp}
                placeholder="Enter data" 
                onChangeText={text => onChangeInput(text)}/>
            <Button 
                title="ADD" 
                onPress={btnPress}/>
        </View>
    )
};


const styles = StyleSheet.create({
    block: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    inp: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor:'#3949ab'
    }
});