import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popUpped:false,
}

const popupSlice = createSlice({
    name : "popup",
    initialState,
    reducers:{
        openPopup:(state)=>{
            state.popUpped = true;
        },
        closePopup:(state)=>{
            state.popUpped = false;
        }
    }
})

export const {openPopup,closePopup} = popupSlice.actions;
export default popupSlice.reducer;