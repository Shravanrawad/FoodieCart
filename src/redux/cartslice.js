import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
       name: 'cart',
       initialState: {
        cart: [],
        searchData: ''
       },

       reducers: {

        addToCart(state, action) {
          const existingItem = state.cart.find(item => item.id === action.payload.id);
          if (existingItem) {
            state.cart = state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            );
          } else {
            state.cart.push({ ...action.payload, qty: 1 });
          }
        },

        removeitem(state, action){
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },

        setsearchvalue(state, action){
            state.searchData = action.payload
        },

        incrementqty(state, action){
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item)
        },
        
        decrementqty(state, action) {
            state.cart = state.cart.map(item => 
              item.id === action.payload.id && item.qty > 1 
                ? { ...item, qty: item.qty - 1 } 
                : item
            );
        }
          
       }
})

export default cartslice.reducer
export const {addToCart, removeitem, setsearchvalue, incrementqty, decrementqty} = cartslice.actions