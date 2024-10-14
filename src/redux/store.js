import {configureStore} from '@reduxjs/toolkit'
import cartSliceReducer from '../redux/cartslice'
import categoryreducer from '../redux/categoryslice'

export const store = configureStore({
    reducer: {
       cart: cartSliceReducer,
       category: categoryreducer
    }
})