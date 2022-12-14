import React from 'react';
import {View,StyleSheet} from 'react-native';
import { setMealToDelete, deleteMealFromTable } from '../slices/TableSlice';
import { addMeal } from '../slices/BillSlice';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'

const TableScreen = () =>{
    const { tableMeals } = useSelector((state) => state.table);
  
    return (
        <View style={styles.container}>
            <View style={styles.mealListContainerStyle}>
                <MealList
                    meals={tableMeals}
                    pressIcon={faPlus}
                    iconColor='green'
                    itemToDeleteFunc={setMealToDelete}
                    itemToAddFunc={addMeal}
                    deleteItemFunc={deleteMealFromTable} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mealListContainerStyle: {
        flex: 4

    },
    buttonContainerStyle: {
        flex: 1,
        marginTop: 10
    }
});

export default TableScreen;