import { createSlice } from '@reduxjs/toolkit'
import { fetchMeals } from '../actions/BillActions';

const initialState = {
    meals: []
}

const BillSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
    },
    extraReducers:{
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
export default BillSlice.reducer;