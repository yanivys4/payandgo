import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Card, CardSection } from './common';
import { showModal } from '../slices/PopupDialogSlice';
import {deleteMealFromBill,setMealToDelete} from '../slices/BillSlice';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const MealDetail = ({ meal,icon }) => {

    const { thumbnail_image, title, description, price, quantity } = meal;
    const dispatch = useDispatch();

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
                    <TouchableOpacity onPress={() => {
                        dispatch(setMealToDelete(title));
                        if (quantity > 1) {
                            dispatch(showModal({ quantity, title }));

                        } else {
                            dispatch(deleteMealFromBill(1));
                        }
                    }}>
                        <FontAwesomeIcon icon={icon} color='#9e2b2b' />
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
    priceContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 5,
        // borderWidth: 1,
        // borderColor: 'green',
        flex: 1
    },
    quantityContainerStyle: {
        // alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,
        // borderWidth: 1,
        // borderColor: 'green',

    },
    quantityTextStyle: {
        fontSize: 14,
        color: '#9e2b2b',
        fontWeight:'bold'
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
        fontSize: 20,
        fontStyle: 'bold',
        color: '#9e2b2b'
    }
});

export default MealDetail;