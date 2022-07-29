import React from 'react';
import {Text, View} from 'react-native';
import AccountScreen from './AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }

const HomeScreen = () => {

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

export default HomeScreen;