import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice(
  {
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    // below are the action that the dispatch can perform 
    login: (state,action) => {
      // here we are setting up the state with the payload that we get through dispatch
      state.user = action.payload;
    },
    logout: (state) => {
      // here as the user logout we wil set the initialstate to null
      state.user = null;
    },
  },
});

export const { login,logout } = userSlice.actions;

// the selectUser will help us to pull the reduxer data into various components these are called as the selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
