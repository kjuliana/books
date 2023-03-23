import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    filter: 'all'
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        }
    }
})

export const filterActions = filterSlice.actions;
export const filterReducer = filterSlice.reducer;