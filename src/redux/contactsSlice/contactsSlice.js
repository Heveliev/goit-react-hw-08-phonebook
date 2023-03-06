import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact } from './thunk';
import { isAnyOf } from '@reduxjs/toolkit';



const actions = [fetchAllContacts, addContact, deleteContact];

const handleFetchContatcs = (state, action) => {
  state.items = action.payload;
};

const handleAddContatcs= (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteContatcs = (state, action) => {
  const idx = state.items.findIndex(item => item.id === action.payload.id);
  state.items.splice(idx, 1);
};


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState:{
    items: [],
    isLoading: false,
    error: null
  },

 extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.fulfilled, handleFetchContatcs)
      .addCase(addContact.fulfilled, handleAddContatcs)
      .addCase(deleteContact.fulfilled, handleDeleteContatcs)
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
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

