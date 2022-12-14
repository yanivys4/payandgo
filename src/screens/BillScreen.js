import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Button } from '../components/common';
import MealList from '../components/MealList';
import { setMealToDelete, deleteMealFromBill } from '../slices/BillSlice';
import { addMeal } from '../slices/TableSlice';
import { useSelector } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import {Card,CardSection} from '../components/common';

const BillScreen = () => {
    const { meals,amountToPay } = useSelector((state) => state.bill);
    
    return (
        <View style={styles.container}>
            <View style={styles.mealListContainerStyle}>
                <MealList
                    meals={meals}
                    pressIcon={faTrash}
                    iconColor='red'
                    itemToDeleteFunc={setMealToDelete}
                    itemToAddFunc={addMeal}
                    deleteItemFunc={deleteMealFromBill} />
            </View>
            
                <View style={styles.amountToPayContainerStyle}>
                    <Text 
                    style={styles.amountToPayTextStyle}
                    >{`Total to pay:${amountToPay}$`}
                    </Text>
                </View>
                
            <View style={styles.buttonContainerStyle}>
                <Button onPress={() => { console.log("PAY") }}> Pay your bill</Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mealListContainerStyle: {
        flex: 3
    },
    amountToPayContainerStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
       
    },
    buttonContainerStyle: {
        flex: 1,
        marginTop: 10,
        

    },
    amountToPayTextStyle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#9e2b2b',

    }
});

export default BillScreen;