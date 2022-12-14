import { createSlice } from '@reduxjs/toolkit'
import { fetchMeals } from '../actions/BillActions';

const initialState = {
    meals: [],
    mealToDelete: "",
    amountToPay:0
}

export const BillSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        deleteMealFromBill(state) {
            let index = state.meals.findIndex(item => item.description == state.mealToDelete);
            state.amountToPay -= state.meals[index].price;
            state.meals[index].quantity = state.meals[index].quantity - 1;
            state.meals = state.meals.filter(item => item.quantity != 0);
            
        },
        setMealToDelete(state, { payload }) {
            state.mealToDelete = payload;
        },
        
        addMeal(state, { payload }) {
            // first search for an item with the given title
            let index = state.meals.findIndex(item => item.description == payload.description);
            // then, if exist append quantity
            if (index > -1) {
                state.meals[index].quantity += 1;
            // if not create one with quantity = 1    
            }else{
                state.meals.push({...payload,quantity:1}); // add new member with quantity = 1
            }
            state.amountToPay += payload.price;
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
export const { deleteMealFromBill, setMealToDelete, addMeal } = BillSlice.actions;
export default BillSlice.reducer;