import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components/common';
import * as RootNavigation from '../RootNavigation';


const JoinScreen = () => {
  
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>

      <Text>Join!</Text>
      <Button onPress={
        () => {
          RootNavigation.navigate('Dinner');
        }}
      >Join Table</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
})

export default JoinScreen;