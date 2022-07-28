import React from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import { Spacer } from './Spacer';
import {Text} from '@rneui/base';


const NavLink = ({LinkText,Link,onPress}) => {
    return (
        <TouchableOpacity onPress={() => {onPress()}}>
            <Spacer>
                <Text style={styles.navLink}>{LinkText}
                    <Text style={styles.link}>{` ${Link}`}</Text>
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        margin:15     
    },
    navLink:{
        color:'black',
        marginLeft: 5,
        fontSize: 18,
        fontWeight:'bold' 
    },
    link:{
        color:'#9e2b2b',
        marginLeft: 5,
        fontSize: 18,
        fontWeight:'bold' 
    }

});

export {NavLink};

