import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';

const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading:true,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart: (state) =>{
            state.cartItems=[];
        },
        removeItem:(state,{payload})=>{
            state.cartItems = state.cartItems.filter((item)=>
            item.id !== payload)
        },
        increase:(state,{payload})=>{
            const cartItem =  state.cartItems.find((item)=>
            item.id === payload.id) 
            cartItem.amount = cartItem.amount+1;
        },
        decrease:(state,{payload})=>{
            const itemm=  state.cartItems.find((item)=>
            item.id === payload.id)
            itemm.amount = itemm.amount-1;
        },
    }
})
// console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease} = cartSlice.actions;
export default cartSlice.reducer;