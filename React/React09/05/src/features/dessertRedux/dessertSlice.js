import { createSlice } from "@reduxjs/toolkit";

const dessertSlice = createSlice({
  name : 'dessert',
  initialState : {
    orders : []
  },
  reducers : {
    orderDessert : (state, action) => { 
      state.orders.push({ name: action.payload.name, price: action.payload.price });
     }
  }
})


export const { orderDessert } = dessertSlice.actions;
export default dessertSlice.reducer;