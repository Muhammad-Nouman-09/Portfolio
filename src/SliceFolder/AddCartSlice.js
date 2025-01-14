import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",
  initialState:{
    cartItems: [],
  },
  reducers: {
    
    addProducts: (state, action) =>{

state.cartItems.push({...action.payload})

    },
    
  },
});
export const {addProducts} = counterSlice.actions;
export default counterSlice.reducer;
