import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[],
  total:1,
  item:1,
}

export const thaliSlice = createSlice({
  name: 'thali',
  initialState,
  reducers: {
    addTocart:(state,action)=>{
     state.value.push(action.payload);
     console.log(action.payload);
    },
    removeFromcart:(state, action)=>{
      const newList = state.value.filter((ele,i)=>ele.id!==action.payload)
      state.value = newList;
      
      
  },
  increment:(state, action)=>{
      const cartItem = state.value.find((ele)=>ele.id==action.payload)
   
      cartItem.quantity= cartItem.quantity+1
  },

 decrement:(state, action)=>{
  const cartItem = state.value.find((ele)=>ele.id==action.payload)
  cartItem.quantity= cartItem.quantity-1
  },

totalamt:(state)=>{
      let item = 0;
      let amount=0;
      state.value.forEach((ele)=>{
              console.log(ele)
          item+=ele.quantity;
          amount+=ele.quantity*ele.price;
      })

      state.item=item
      state.total=amount

     
      },
  },
})

// Action creators are generated for each case reducer function
export const {addTocart, removeFromcart, increment, decrement,totalamt } = thaliSlice.actions

export default thaliSlice.reducer