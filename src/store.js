import {configureStore} from '@reduxjs/toolkit';
import postsReducer from '../src/features/Main/MainSlice'
import post_removeReducer from '../src/features/Main/MainRemoveSlice'
export const store = configureStore({
    reducer: {
        posts : postsReducer,
        post_remove : post_removeReducer,
    }
});
