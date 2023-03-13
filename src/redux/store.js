import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter-slice';
import { contactsSlice } from './contacts/contacts-slice';
import { authSlice } from './auth/auth-slice';



export const store = configureStore({
  reducer: {
      auth: authSlice.reducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
  },
})

