import { createSlice } from '@reduxjs/toolkit';
import { isAnyOf } from '@reduxjs/toolkit';
import { register,logIn,logOut, logInRefresh } from './auth-thunk';




const actions = [register, logIn,logInRefresh];

const handleFetchAuth = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
};
const handleRefreshAuth = (state, action) => {
  state.user = action.payload
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
      isLoggedIn: false,
        isRefreshing:false,
        error: null
  },

 extraReducers: builder =>
    builder
      .addCase(register.fulfilled, handleFetchAuth)
     .addCase(logIn.fulfilled, handleFetchAuth)
     .addCase(logInRefresh.fulfilled,handleRefreshAuth)
         .addCase(logOut.fulfilled,
             (state) => {
                 state.user = { name: null, email: null }
                 state.token = null
               state.isLoggedIn = false
               state.isRefreshing = false;
            })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
          state => {
              state.isLoggedIn = true;
            state.error = null;
            state.isRefreshing = false;
        }
   )
     .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isRefreshing = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
          (state, action) => {
            state.error = action.payload;
            state.isRefreshing = false;
        }
      ),

})