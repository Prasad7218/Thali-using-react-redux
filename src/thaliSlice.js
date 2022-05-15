import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart:[],
}

export const thaliSlice = createSlice({
  name: 'thali',
  initialState,
  reducers: {
    addTocart:(state,action)=>{
     state.cart.push(action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const {addToCart } = thaliSlice.actions

export default thaliSlice.reducer