import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, Text } from 'react-native';
import { Button } from '../components/common';
import { useSelector, useDispatch } from 'react-redux';
import { login, setLoading } from '../slices/AuthSlice';

const LoginScreen = () => {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    const renderButton = () => {
        if (loading) {
            return <ActivityIndicator size='large' />;
        }
        return (
            <Button onPress={
                () => {
                    dispatch(setLoading(true));
                    dispatch(login());
                }}>
                Sign In
            </Button>
        );
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../photos/colorLogo.png')}
            />
            <Text style={styles.header}>Please Log in to continue</Text>
            {renderButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    image: {
        alignSelf: 'center',
        marginBottom: 60,
    },
    header: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
        marginLeft: 20,
        fontWeight: 'bold',

    },
});

export default LoginScreen;