import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

const MealDetail = ({ meal,printOnPress }) => {
    console.log("============= meal : ", meal, "==================");
    console.log(printOnPress);
    const { thumbnail_image, title, description, price, quantity } = meal;
    
    return (
        <Card>
            <CardSection>
                <View style={styles.quantityContainerStyle}>
                    <Text style={styles.quantityTextStyle}>{`X${quantity}`}</Text>
                </View>
                <View style={styles.thumbnailImageContainerStyle} >
                    <Image
                        style={styles.thumbnailImageStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTitleStyle}>{title}</Text>
                    <View>
                        <Text style={styles.headerDescriptionStyle}>{description}</Text>
                    </View>
                </View>
                <View style={styles.priceContainerStyle} >
                    <Text style={styles.priceTextStyle}>{`${price}$`}</Text>
                </View>
                <View style={styles.priceContainerStyle}>
                    <TouchableOpacity onPress={()=>{printOnPress()}}>
                        <FontAwesomeIcon icon={ faTrash } color='red' />
                    </TouchableOpacity>
                    
                </View>
            </CardSection>
        </Card>
    );

}

const styles = StyleSheet.create({
    thumbnailImageStyle: {
        height: 50,
        width: 50
    },
    thumbnailImageContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        // marginLeft: 5,
        // borderWidth: 1,
        // borderColor: 'green',
        flex: 1
    },
    priceContainerStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 5,
        // borderWidth: 1,
        // borderColor: 'green',
        flex: 1
    },
    quantityContainerStyle:{
        // alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft:10,
        // borderWidth: 1,
        // borderColor: 'green',
        
    },
    quantityTextStyle:{
        fontSize:14,
        color:'#9e2b2b'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        // borderWidth: 1,
        // borderColor: 'red',
        flex: 4
    },
    headerTitleStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    headerDescriptionStyle: {
        fontSize: 14,
    },
    priceTextStyle: {
        fontSize:20,
        fontStyle:'bold',
        color:'#9e2b2b'
    }
});

export default MealDetail;