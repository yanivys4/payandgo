import { createSlice } from '@reduxjs/toolkit'
import { fetchMeals } from '../actions/BillActions';
import { store } from  '../store'

const initialState = {
    meals: [{
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
    }],
    mealToDelete:""
    
}

export const BillSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        deleteMealFromBill(state, { payload }) {
            console.log(state);
            let index = state.meals.findIndex(item=>item.title == state.mealToDelete);
            console.log("index = ", index);
            console.log("payload = ", payload);
            state.meals[index].quantity = state.meals[index].quantity - payload;
            state.meals = state.meals.filter(item => item.quantity != 0);
            
        },
        setMealToDelete(state,{payload}){
            state.mealToDelete = payload;
        },
    },
    extraReducers: {
        [fetchMeals.pending]: (state) => {
            console.log("======== pending ========");
        },
        [fetchMeals.fulfilled]: (state, { payload }) => {
            state.meals = payload;
        },
        [fetchMeals.rejected]: (state) => {
            console.error("======== rejected! ========");
        },

    },
})

// Action creators are generated for each case reducer function
export const { deleteMealFromBill,setMealToDelete } = BillSlice.actions;
export default BillSlice.reducer;