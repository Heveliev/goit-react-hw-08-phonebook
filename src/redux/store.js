import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filter/filter-slice';
import { contactsSlice } from './contacts/contacts-slice';
import { authSlice } from './auth/auth-slice';
import { modalSlice } from './modal/modal-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersisiConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    auth:persistReducer(authPersisiConfig, authSlice.reducer),
      // auth: authSlice.reducer,
        contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    modal: modalSlice.reducer,
  },
  middleware(getDefaultMiddleware){
   return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })},
})



export const persistor = persistStore(store)