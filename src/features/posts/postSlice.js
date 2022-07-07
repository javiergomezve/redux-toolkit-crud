import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => json);
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.list = action.payload;
            state.status = 'success';
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default postsSlice.reducer;
