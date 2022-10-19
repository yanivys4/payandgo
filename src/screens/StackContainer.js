import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import LoadingScreen from './LoadingScreen';
import HomeScreen from './HomeScreen';
import { navigationRef } from '../RootNavigation.js';
import DinnerScreen from './DinnerScreen';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
    return (
        <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dinner"
          component={DinnerScreen}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>

      </NavigationContainer>
    );
}

export default StackContainer;


