import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JoinScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Join!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    }
})

export default JoinScreen;