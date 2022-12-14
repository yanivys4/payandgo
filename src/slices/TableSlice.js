import { createSlice } from '@reduxjs/toolkit'

const createId = () => {
    return Math.floor(Math.random() * 100000);
}

const initialState = {
    tableMeals: [{
        "title": "Burger 220g",
        "description": "Yummy Burger with tomato, onions,Yummy Burger with tomato, onions",
        "price": 20,
        "quantity": 3,
        "thumbnail_image": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
        id:createId()
    },
    {
        "title": "Greek Salad",
        "description": "Lettuce, Tometo, cucamber, Cheese",
        "price": 10,
        "quantity": 2,
        "thumbnail_image": "https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg",
        id:createId()
    },
    {
        "title": "Pasta Tomato Sauce",
        "description": "Spaghetti with Tometo Sauce",
        "price": 15,
        "quantity": 1,
        "thumbnail_image": "https://assets.epicurious.com/photos/55f72d733c346243461d496e/1:1/w_1920,c_limit/09112015_15minute_pastasauce_tomato.jpg",
        id:createId()
    }],
    mealToDelete: "", // description
    
}

export const TableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        deleteMealFromTable(state) {
            let index = state.tableMeals.findIndex(item => item.description == state.mealToDelete);
            state.tableMeals[index].quantity = state.tableMeals[index].quantity - 1;
            state.tableMeals = state.tableMeals.filter(item => item.quantity != 0);
        },
        setMealToDelete(state, { payload }) {
            state.mealToDelete = payload;
        },
        addMeal(state, { payload }) {
            let index = state.tableMeals.findIndex(item => item.description == payload.description);
            if(index > -1){ // there is a meal on list
                state.tableMeals[index].quantity += 1 ;
            }
            else{
                state.tableMeals.push({...payload,quantity:1});; // add new member with quantity = 1
            } 
        },
    },
    extraReducers: {
        // [BillSlice.actions.deleteMealFromBill]: (state) => {
        //     console.log("meal to add:",state.mealToAdd);
            
        //     state.tableMeals.push(state.mealToAdd);
            
        // }
    },
})

// Action creators are generated for each case reducer function
export const { deleteMealFromTable, setMealToDelete,addMeal } = TableSlice.actions;
export default TableSlice.reducer;