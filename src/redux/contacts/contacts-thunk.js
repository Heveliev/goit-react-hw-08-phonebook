import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchAllContacts = createAsyncThunk(
  'contacts/getContatcs',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }

  }
);



export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const {data} = await axios.post('/contacts', {name,number});
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk('contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
      console.log(name)
    try {
      const res = await axios.patch(`/contacts/${id}`,{name:name,number:number});
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)