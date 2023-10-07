import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice';
import modalReducer from "./features/modal/modalSlice";
import popupReducer from "./features/popup/popupSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
        popup:popupReducer,
    },
});