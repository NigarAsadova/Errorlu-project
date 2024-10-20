import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../../libs/Api';

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async(_, { rejectWithValue }) => {
        try {
            const response = await API.get("posts");
            return response.data;
        } catch (error) {
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;

            reportError({ message });

            return rejectWithValue(message); 
        }
    }
);
