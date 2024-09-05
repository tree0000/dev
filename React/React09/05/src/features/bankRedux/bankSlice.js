import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
  name: "bank",
  initialState : {
    value : 0
  },
  reducers : {
    deposit : (state, action) => {state.value += action.payload},
    withdraw : (state, action) => {state.value -= action.payload},
  }
})

export const {deposit, withdraw} = bankSlice.actions;
export default bankSlice.reducer;