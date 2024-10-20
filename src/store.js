import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../src/features/Main/MainSlice'
export const store = configureStore({
    reducer: {
        posts : postsReducer
    }
});
