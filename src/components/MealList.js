import React, { useEffect, useState } from 'react';
import { View, FlatList,ActivityIndicator } from 'react-native';
import MealDetail from '../components/MealDetail';
import { fetchMeals } from '../actions/BillActions';
import { useDispatch } from 'react-redux';


const MealList = ({ meals, pressIcon, iconColor, itemToDeleteFunc, itemToAddFunc, deleteItemFunc }) => {
    const dispatch = useDispatch();
    
    // useEffect(() => {
    //     // dispatch(fetchMeals());
    // },[]);

    const renderItem = ({ item }) => (
        <MealDetail meal={item} icon={pressIcon} iconColor={iconColor} pressAction={() => {
            dispatch(itemToDeleteFunc(item.description));
            dispatch(itemToAddFunc(
                {title:item.title,
                description:item.description,
                price:item.price,
                thumbnail_image:item.thumbnail_image,
                id:item.id
                }));
            dispatch(deleteItemFunc());

        }} />
    );
    const renderMeals = ()=>{
        if(meals){
            return (
                <FlatList
                    data={meals}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            );
        }else{
            return <ActivityIndicator size='large' />;
        }
    }    
    return (
        <View style={{}}>
            {renderMeals()}
        </View>
    );
}


export default MealList;