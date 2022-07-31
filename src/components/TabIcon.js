import React from "react";
import { View, StyleSheet, Image,Text } from 'react-native';
import ImagesMap from "../assets/icons/ImagesMap";

const TabIcon = ({ imageName, title, focused }) => {
    console.log(imageName);
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            top: 5,

        },
        image: {
            width: 40,
            height: 40,
            tintColor: focused ? '#9e2b2b' : '#748c94',
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
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default TabIcon;