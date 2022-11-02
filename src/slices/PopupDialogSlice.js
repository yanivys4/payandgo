import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modalVisible: false,
    numberOfOptions: 1,
    
};

export const PopupDialogSlice = createSlice({
    name:'popupdialog',
    initialState,
    reducers:{
        setModalVisible(state, { payload }) {
            state.modalVisible = payload;
        },
        setNumberOfOptions(state, { payload }) {
            state.numberOfOptions = payload;
        },
        showModal(state, { payload }) {
            state.numberOfOptions = payload.quantity;
            state.modalVisible = true;
        },
        
    }
});

export const {setModalVisible, setNumberOfOptions, showModal} = PopupDialogSlice.actions;
export default PopupDialogSlice.reducer;

