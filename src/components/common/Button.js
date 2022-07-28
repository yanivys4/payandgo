import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress,children}) => {
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    textStyle:{
        alignSelf:'center',
        color:'white',
        fontSize:16,
        fontWeight:'700',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        backgroundColor:'#9e2b2b',
        borderRadius:5,
        borderWidth:1,
        borderColor:'transparent',
        marginLeft:5,
        marginRight:5
    }
}
export {Button};