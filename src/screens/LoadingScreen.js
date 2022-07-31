import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { localLogin } from '../slices/AuthSlice';

const LoadingScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(localLogin());
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <ActivityIndicator size="large" />
                <View style={{ marginTop: 10 }}>
                    <Text>Please wait...</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default LoadingScreen;