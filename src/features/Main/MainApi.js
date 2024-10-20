import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../../libs/Api';

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async() => {
        try {
            const response = await API.get("posts");
            return response.data;
        } catch (error) {
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;
            console.log(message);
        }
    }
);

export const removePost = createAsyncThunk(
    "post_remove/removePost",
    async(postID) => {
        try{
            const response = await API.delete(`posts / ${postID}`);
            return postID;
        } catch (error) {
            let message = 'Unknown Error';
            if(error instanceof Error) message = error.message;
            console.log(message);
        }
    }
)