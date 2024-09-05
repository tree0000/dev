import { createSlice } from "@reduxjs/toolkit";


export const memberSlice = createSlice({
  name : "member",
  initialState : {
    members : []
  },
  reducers : {
    addMember : (state, action) => { 
      state.members.push({ name: action.payload.name, age: action.payload.age, region: action.payload.region });
     },
    delMember: (state, action) => {
      state.members = state.members.filter((_, index) => index !== action.payload);
    }
  }
})

export const {addMember, delMember} = memberSlice.actions
export default memberSlice.reducer