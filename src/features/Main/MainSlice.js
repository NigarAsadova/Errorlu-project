import { createSlice } from "@reduxjs/toolkit";
import {getPosts} from './MainApi';

const initialState = {
    posts: [],
    isLoading: false,
    error: null
};

const MainSlice = createSlice({
    name : "posts",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getPosts.pending, (state) =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getPosts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected,(state, action) =>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default MainSlice.reducer;