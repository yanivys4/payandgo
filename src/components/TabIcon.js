import React from "react";
import { View, StyleSheet, Image,Text } from 'react-native';

const TabIcon = ({ imageName, title, focused, iconSize='small',color }) => {
    
    
    const setImageStyle = (iconSize) => {
        if(iconSize == 'large'){
            return {width:60, height:60,tintColor:'white' };
        }
        return {width:35, height:35,tintColor:focused ? '#9e2b2b' : '#748c94'};
    }
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            top: 5,
        },
        image: {
            ...setImageStyle(iconSize)
        },
        title:{
            color: focused ? '#9e2b2b' : '#748c94',
            fontSize:12
        }
    });

    return (
        <View style={styles.container}>
            <Image
                source={imageName}
                resizeMode='contain'
                style={styles.image}
            />
            {title ? <Text style={styles.title}>{title}</Text> : null}
        </View>
    );
}

export default TabIcon;