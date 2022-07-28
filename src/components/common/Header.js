import React from 'react';
import {Text, View} from 'react-native';
const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 25,
    color:'black',
  },
  container: {
    backgroundColor:'#F8F8F8',
    justifyContent:'center',
    borderColor:'black',
    alignItems:'center',
    height:60,
    paddingTop:15,
    shadowColor:'black',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    elevation:2,
    position:'relative'
  },
};

export {Header};
