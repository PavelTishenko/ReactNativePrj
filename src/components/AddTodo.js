import React from 'react'
import { 
    View, Text, 
    TextInput, TouchableOpacity, 
    StyleSheet} from 'react-native'
import {ThemeProvider, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

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
                {/* {/* // btn from RN Elements */}
                <Button 
                    title='ADD'
                    type="solid"
                    onPress={btnPress}
                    buttonStyle={styles.btn}
                    icon={
                        <Icon 
                            name="plus-square"
                            size={20}
                            color="white"/>
                    }/>      
                
                {/* custom button */}
                {/* <TouchableOpacity 
                    onPress={btnPress}
                    style={styles.btn}>
                    <Text 
                    style={styles.text}>ADD</Text>
                </TouchableOpacity> */}

                {/* default button */}
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
        marginLeft: 15,
        padding: 14,
        backgroundColor: '#3949ab',
        width: '60%',
        alignItems: 'center',
        borderRadius: 5
    },
    text: {
        color: 'white'
    }
});