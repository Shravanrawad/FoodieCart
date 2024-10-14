import {createSlice} from '@reduxjs/toolkit'

export const categoryslice = createSlice({
       name: 'category',
       initialState: {
           category: 'All'
       },

       reducers: {
           setCategory(state, action){
              state.category = action.payload;
           }   
       }
})


export default categoryslice.reducer
export const {setCategory} = categoryslice.actions