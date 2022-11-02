import React, { useEffect } from 'react';
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MealDetail from '../components/MealDetail';
import { fetchMeals } from '../actions/BillActions';
import { useDispatch } from 'react-redux';

const MealList = ({meals,pressIcon}) => {
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchMeals());
    // },[]);

    const renderItem = ({ item }) => (
        <MealDetail meal={item} icon={pressIcon} />
    );

    const renderMeals = () => {
        if (meals) {
            return (
                <FlatList
                    data={meals}
                    renderItem={renderItem}
                    keyExtractor={meal => meal.title}
                />
            );
        } else {
            return <ActivityIndicator size='large' />;
        }

    };

    return (
        <View style={{}}>
            {renderMeals()}
        </View>
    );
}


export default MealList;