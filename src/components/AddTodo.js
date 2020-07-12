import React from 'react'
import { View, Text, TextInput, TouchableOpacity , Button, StyleSheet } from 'react-native'

export const AddTodo = ({inpValue,onChangeInput, btnPress}) => {
    return(

        <View style={styles.block}>
            <TextInput 
                value={inpValue}
                style={styles.inp}
                placeholder="Enter data" 
                onChangeText={text => onChangeInput(text)}
                autoCorrect
                autoCapitalize="none"
                // keyboardType='numeric'
                />
                <TouchableOpacity 
                    onPress={btnPress}
                    style={styles.btn}>
                    <Text 
                    style={styles.text}>ADD</Text>
                </TouchableOpacity>
                
            {/* <Button
                style={styles.btn} 
                title="ADD" 
                onPress={btnPress}/> */}
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
        borderColor:'#3949ab',
        borderRadius: 5
    },
    btn:{
        padding: 16,
        backgroundColor: '#3949ab',
        width: '28%',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
});