import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import jwtDecode from "jwt-decode";
import { logout } from '../slices/AuthSlice';
import { Button } from '../components/common';

const AccountScreen = () => {

  const dispatch = useDispatch();
  const { idToken } = useSelector(state => state.auth);
  console.log("idToken = ", idToken);
  const { name, picture, exp } = jwtDecode(idToken);

  if (exp < Date.now() / 1000) {
    throw new Error('ID token expired!');
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: picture }}
      />
      <Button onPress={
        () => {
          dispatch(logout());
        }}
      >
        Sign Out
      </Button>
    </View>
  );

};

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  header: {
    fontSize: 25,
    color: 'black',
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  link: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    marginVertical: 15,
    fontWeight: 'bold'
  },
  image: {
    alignSelf: 'center',
    marginBottom: 60,
    width: 50,
    height: 50
  }
})

export default AccountScreen;