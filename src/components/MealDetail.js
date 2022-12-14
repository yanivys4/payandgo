import React, { useRef } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { Card, CardSection } from './common';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const MealDetail = ({ meal, icon, pressAction,iconColor }) => {

    const { thumbnail_image, title, description, price, quantity } = meal;
    const dispatch = useDispatch();

    const swipeableRef = useRef(null);

    const closeSwipeable = () => {
        swipeableRef.current.close();
    }

    const rightSwipeActions = () => {

        return (
            <TouchableOpacity onPress={() => {
                pressAction();
                closeSwipeable();

            }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: iconColor,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                    }}
                >
                    <View
                        style={{
                            color: 'white',
                            paddingHorizontal: 10,
                            fontWeight: '600',
                            paddingHorizontal: 30,
                            paddingVertical: 20,
                        }}
                    >
                        <FontAwesomeIcon icon={icon} color='white' />
                    </View>

                </View>
            </TouchableOpacity>

        );
    };
    const showQuantity = (quantity) => {
        if(quantity!=undefined){
            return(
                <View style={styles.quantityContainerStyle}>
                            <Text style={styles.quantityTextStyle}>{`X${quantity}`}</Text>
                        </View>
            );
        }
    }
    return (
        <GestureHandlerRootView>
            <Card>
                <Swipeable ref={swipeableRef} renderRightActions={rightSwipeActions}>
                    <CardSection>
                        
                        {showQuantity(quantity)}
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
                    </CardSection>
                </Swipeable>
            </Card>
        </GestureHandlerRootView>

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
        flex: 1
    },
    priceContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 5,
        flex: 1
    },
    quantityContainerStyle: {
        justifyContent: 'center',
        marginRight: 10,
        marginLeft: 10,

    },
    quantityTextStyle: {
        fontSize: 14,
        color: '#9e2b2b',
        fontWeight: 'bold'
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
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