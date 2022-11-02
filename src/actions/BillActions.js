import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import mealsApi from '../../api/meals';

export const fetchMeals = createAsyncThunk(
    'meals/fetchMeals',
    async () => {
        try {
            const response = await mealsApi.get('/meals');
            console.log(response);
            return response.data;
        }
        catch (err) {
            console.log(err);
        }
    }
);