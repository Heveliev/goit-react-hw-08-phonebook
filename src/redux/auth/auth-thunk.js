import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  },
  unset() {
    axios.defaults.headers.common.Authorization = ''
  }
}

export const register = createAsyncThunk('auth/register', async ({name,email,password}, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', { name, email, password })
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const logIn = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', { email, password })
        token.set(data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout')
        token.unset()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


// export const fetchAllContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await getContacts()
//       return response.data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }

//   }
// );
