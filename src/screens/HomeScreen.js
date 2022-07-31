import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AccountScreen from './AccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../components/TabIcon';
import ImageMap from '../assets/icons/ImagesMap';

const Tab = createBottomTabNavigator();

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const HomeScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
        ...styles.shadow
      }}


    >
      <Tab.Screen name="Account" component={AccountScreen} options={{
        tabBarIcon: ({ focused }) => TabIcon({ imageName:ImageMap.Home , title: 'Account', focused })
      }}
      />
      <Tab.Screen name="Notifications" component={Notifications} options={{

      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    height: 90
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
export default HomeScreen;