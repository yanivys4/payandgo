import { configureStore,combineReducers } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice';
import BillReducer from './slices/BillSlice';
import PopupDialogReducer from './slices/PopupDialogSlice';

const reducer = combineReducers({auth:AuthReducer,bill:BillReducer,popupdialog:PopupDialogReducer});
export const store = configureStore({
  reducer
});