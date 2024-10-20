import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../../libs/Api';

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async(_, { rejectWithValue }) => {
        try {
            const response = await API.get("posts");
            console.log('API response:', response.data); // Log the response
            return response.data;
        } catch (error) {
            console.error('Error during API request:', error); // Log the error
            let message = 'Unknown Error';
            if (error instanceof Error) message = error.message;

            reportError({ message });

            return rejectWithValue(message); // Return rejectWithValue
        }
    }
);
