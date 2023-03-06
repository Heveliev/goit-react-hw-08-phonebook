import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts,add, deleteCon } from 'api/fetchApi';


export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getContacts()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);



export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name,phone}, thunkAPI) => {
    try {
      const res = await add(name,phone);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await deleteCon(id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);