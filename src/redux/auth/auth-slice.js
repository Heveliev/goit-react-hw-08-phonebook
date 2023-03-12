import { createSlice } from '@reduxjs/toolkit';
// import { fetchAllContacts, addContact, deleteContact } from './thunk';
import { isAnyOf } from '@reduxjs/toolkit';
import { register,logIn,logOut } from './auth-thunk';




const actions = [register, logIn];

const handleFetchAuth = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
};

// const handleAddContatcs= (state, action) => {
//   state.items.push(action.payload);
// };

// const handleDeleteContatcs = (state, action) => {
//   const idx = state.items.findIndex(item => item.id === action.payload.id);
//   state.items.splice(idx, 1);
// };


export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isLoading:false,
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
                 state.isLoading= false
            })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
          state => {
              state.isLoading = false;
              state.isLoggedIn = true;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
          (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),

})