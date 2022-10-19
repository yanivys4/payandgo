import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice';
import BillReducer from './slices/BillSlice';

export const store = configureStore({
  reducer: {
    auth:AuthReducer,
    bill:BillReducer,
  },
});