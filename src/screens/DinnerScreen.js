import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BillScreen from './BillScreen';
import TableScreen from './TableScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabIcon from '../components/TabIcon';
import ImageMap from '../assets/icons/ImagesMap';
import TabButton from '../components/TabButton';


const Tab = createBottomTabNavigator();

const DinnerScreen = () => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
        ...styles.shadow,
        headerShown:false,
        backgroundColor:'red'
      }}
    >
      <Tab.Screen name="Table" component={TableScreen} options={{
        tabBarIcon: ({ focused }) => TabIcon({ imageName:ImageMap.Table,title:'My Table', focused})
      }}
      />
      <Tab.Screen name="Bill" component={BillScreen} options={{
        tabBarIcon: ({ focused }) => TabIcon({ imageName:ImageMap.Bill , title: 'My Bill', focused })
      }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
     position: 'absolute',
    // bottom: 25,
    // left: 20,
    // right: 20,
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
export default DinnerScreen;