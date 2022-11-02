import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '../components/common';
import MealList from '../components/MealList';
import PopupDialog from '../components/PopupDialog';
import { deleteMealFromBill } from '../slices/BillSlice';
import { useSelector } from 'react-redux';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

const BillScreen = () => {
    const { meals } = useSelector((state) => state.bill);
    
    return (
        <View style={styles.container}>
            <PopupDialog
                submitFunction={deleteMealFromBill}
                title="How many to delete?"
            />
            <View style={styles.mealListContainerStyle}>
                <MealList meals={meals} pressIcon={faTrash} />
            </View>

            <View style={styles.buttonContainerStyle}>
                <Button onPress={() => { console.log("PAY") }}> Pay your bill</Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // borderWidth:4,
        // borderColor:'red',
        flex: 1
    },
    mealListContainerStyle: {
        // borderWidth:3,
        // borderColor:'green',
        flex: 4

    },
    buttonContainerStyle: {
        flex: 1,
        marginTop: 10
    }
});
export default BillScreen;