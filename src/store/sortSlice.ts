import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    sort: 'relevance'
};

export const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        updateSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        }
    }
})

export const sortActions = sortSlice.actions;
export const sortReducer = sortSlice.reducer;