import React from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const TabButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.touchable}
            onPress={onPress}
        >

            <View style={styles.view}>
                {children}
            </View>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    touchable: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,

    },
    view: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#9e2b2b'
    }
});

export default TabButton;