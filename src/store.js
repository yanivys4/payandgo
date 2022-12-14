import { configureStore,combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice';
import BillReducer from './slices/BillSlice';
import TableReducer from './slices/TableSlice';

const reducer = combineReducers({auth:AuthReducer,bill:BillReducer,table:TableReducer});
export const store = configureStore({
  reducer
});