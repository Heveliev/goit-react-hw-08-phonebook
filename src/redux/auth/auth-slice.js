import { createSlice } from '@reduxjs/toolkit';
import { isAnyOf } from '@reduxjs/toolkit';
import { register,logIn,logOut } from './auth-thunk';




const actions = [register, logIn];

const handleFetchAuth = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        error: null
  },

 extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFetchAuth)
         .addCase(logIn.fulfilled, handleFetchAuth)
         .addCase(logOut.fulfilled,
             (state) => {
                 state.user = { name: null, email: null }
                 state.token = null
                 state.isLoggedIn = false
            })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
          state => {
              state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
          (state, action) => {
          state.error = action.payload;
        }
      ),

})