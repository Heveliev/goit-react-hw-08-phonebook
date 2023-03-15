import { createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts, addContact, deleteContact, editContact} from './contacts-thunk';
import { isAnyOf } from '@reduxjs/toolkit';



const actions = [fetchAllContacts, addContact, deleteContact,editContact];

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
const handleEditContacts = (state, action) => {
   const { id, updatedContact } = action.payload;
  const index = state.items.findIndex(item => item.id === id);
  if (index !== -1) {
    state.items[index] = { ...state.items[index], ...updatedContact };
  }
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
     .addCase(editContact.fulfilled, handleEditContacts)
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