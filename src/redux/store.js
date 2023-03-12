import { configureStore } from '@reduxjs/toolkit';
// import { filterSlice } from './filterSlice/filterSlice';
// import { contactsSlice } from './contactsSlice/contactsSlice';
import { authSlice } from './auth/auth-slice';



export const store = configureStore({
  reducer: {
      auth: authSlice.reducer,
        // contacts: contactsSlice.reducer,
        // filter: filterSlice.reducer,
  },
})

