import { createSlice, isPending } from "@reduxjs/toolkit"
import { removePost } from "./MainApi"

const initialState = {
    isLoading : false,
    error : null
}

const MainRemoveSlice = createSlice({
    name : 'post_remove',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(removePost.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(removePost.fulfilled, (state) => {
                state.isLoading = false;
                state.fulfilled = window.location.reload();
            })
            .addCase(removePost.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default MainRemoveSlice.reducer;