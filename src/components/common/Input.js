import React from 'react';
import {Text,TextInput,View} from 'react-native';


const Input = ({label,onChangeText,value,placeholder,secureTextEntry}) => {
    const {labelStyle,inputStyle,containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style = {labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={inputStyle}
                autoCorrect={false}
            />
        </View>
    );
};

const styles = {
    inputStyle:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
    },
    labelStyle:{
        flex:1,
        fontSize:18,
        paddingLeft:20,
    },
    containerStyle:{
        flex:1,
        height:40,
        flexDirection:'row',
        alignItems:'center',
    }
}

export {Input};