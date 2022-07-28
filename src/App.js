import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import AccountScreen from './screens/AccountScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import { navigationRef } from './RootNavigation.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}


function Home() {
  return (
    <Tab.Navigator activeColor="#e91e63" style={{ backgroundColor: 'tomato' }} >
      <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
          <Tab.Screen name="Notifications" component={Notifications} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const App = () => {

  return (
    <Provider store={store}>
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
          component={Home}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        
      </NavigationContainer>
    </Provider>

  );
}

export default App;
