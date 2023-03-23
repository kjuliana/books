import {configureStore} from "@reduxjs/toolkit";
import {googleBooksApi} from "./googleBooks/googleBooks.api";
import {searchReducer} from "./searchSlice";
import {filterReducer} from "./filterSlice";
import {sortReducer} from "./sortSlice";

export const store = configureStore({
    reducer: {
        [googleBooksApi.reducerPath]: googleBooksApi.reducer,
        search: searchReducer,
        filter: filterReducer,
        sort: sortReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(googleBooksApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>