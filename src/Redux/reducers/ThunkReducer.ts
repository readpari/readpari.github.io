import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface initialState {
  isLoading: boolean;
  error: string;
  thunkPosts: postType[];
}

interface postType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const initialState: initialState = {
  isLoading: false,
  error: '',
  thunkPosts: [],
};

export const fetchPosts = createAsyncThunk('users/fetchByIdStatus', async (_: void, thunkAPI) => {
  const response = await axios.get<postType[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const ThunkReducer = createSlice({
  name: 'ThunkReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<postType[]>) => {
      state.isLoading = false;
      state.error = '';
      state.thunkPosts = action.payload;
    },
    [fetchPosts.pending.type]: (state, action: PayloadAction<postType[]>) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = 'action.payload';
    },
  },
});

export default ThunkReducer.reducer;
export const {} = ThunkReducer.actions;
