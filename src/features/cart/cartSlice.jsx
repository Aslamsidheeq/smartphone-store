import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../components/cartItems';

const initialState = {
    cartItems: cartItems,
    total:0,
    isLoading:true,
}

//export to store
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
        calculateTotals:(state)=>{
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item)=>{
            amount = amount+item.amount,
            total= amount*item.price});
            state.amount = amount;
            state.total = total;
        }
    }
})
// console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease,calculateTotals} = cartSlice.actions;   //action creators
export default cartSlice.reducer;

//  In a redux application, the state is stored in a
//  single store file , and the components can access 
//  the state by subscribing to the store.
//  When an action is dispatched, it is sent to the reducer,
//  which updates the state based on the action type and 
//  payload. The updated state is then sent back to the store,
//  which notifies all subscribed components of the change.