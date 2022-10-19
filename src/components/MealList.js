import React, { useEffect } from 'react';
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import MealDetail from '../components/MealDetail';
import { fetchMeals } from '../actions/BillActions';
import { useSelector, useDispatch } from 'react-redux';

const MealList = () => {
    // const { meals } = useSelector((state) => state.bill);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetchMeals());
    // },[]);
    const meals = [{
        "title": "Burger 220g",
        "description": "Yummy Burger with tomato, onions,Yummy Burger with tomato, onions",
        "price": 20,
        "quantity": 2,
        "thumbnail_image": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
    },
    {
        "title": "Greek Salad",
        "description": "Lettuce, Tometo, cucamber, Cheese",
        "price": 10,
        "quantity": 1,
        "thumbnail_image": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg"
    },
    {
        "title": "Pasta Tomato Sauce",
        "description": "Spaghetti with Tometo Sauce",
        "price": 15,
        "quantity": 1,
        "thumbnail_image": "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_1920,c_limit/09112015_15minute_pastasauce_tomato.jpg"
    },
    {
        "title": "Burger 220g2",
        "description": "Yummy Burger with tomato, onions,Yummy Burger with tomato, onions",
        "price": 20,
        "quantity": 2,
        "thumbnail_image": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
    },
    {
        "title": "Greek Salad2",
        "description": "Lettuce, Tometo, cucamber, Cheese",
        "price": 10,
        "quantity": 1,
        "thumbnail_image": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg"
    },
    {
        "title": "Pasta Tomato Sauce2",
        "description": "Spaghetti with Tometo Sauce",
        "price": 15,
        "quantity": 1,
        "thumbnail_image": "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_1920,c_limit/09112015_15minute_pastasauce_tomato.jpg"
    },
    {
        "title": "Burger 220g3",
        "description": "Yummy Burger with tomato, onions,Yummy Burger with tomato, onions",
        "price": 20,
        "quantity": 2,
        "thumbnail_image": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
    },
    {
        "title": "Greek Salad3",
        "description": "Lettuce, Tometo, cucamber, Cheese",
        "price": 10,
        "quantity": 1,
        "thumbnail_image": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg"
    },
    {
        "title": "Pasta Tomato Sauce3",
        "description": "Spaghetti with Tometo Sauce",
        "price": 15,
        "quantity": 1,
        "thumbnail_image": "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_1920,c_limit/09112015_15minute_pastasauce_tomato.jpg"
    },
    {
        "title": "Burger 220g4",
        "description": "Yummy Burger with tomato, onions,Yummy Burger with tomato, onions",
        "price": 20,
        "quantity": 2,
        "thumbnail_image": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg"
    },
    {
        "title": "Greek Salad4",
        "description": "Lettuce, Tometo, cucamber, Cheese",
        "price": 10,
        "quantity": 1,
        "thumbnail_image": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg"
    },
    {
        "title": "Pasta Tomato Sauce4",
        "description": "Spaghetti with Tometo Sauce",
        "price": 15,
        "quantity": 1,
        "thumbnail_image": "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_1920,c_limit/09112015_15minute_pastasauce_tomato.jpg"
    }];

    const renderItem = ({ item,index }) => (
        
        <MealDetail meal={item} printOnPress={()=> {console.log(index)}}/>
    
    );

    const renderMeals = () => {
        if (meals) {
            console.log(meals);
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
        <View>
            {renderMeals()}
        </View>
    );
}


export default MealList;