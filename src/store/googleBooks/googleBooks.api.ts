import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Book, ServerResponse} from "../../models/models";

const apiKey = 'AIzaSyAGFggYtsHjV66VYmeR3tFhNcAIb9TcWlY';

type argsType = {
    search: string,
    filter: string,
    sort: string,
    startIndex: number
}

export const googleBooksApi = createApi({
    reducerPath: 'googleBooks/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1/volumes/'
    }),
    endpoints: build => ({
        searchBooks: build.query<ServerResponse, {}>({
            query: (args: argsType) => ({
                url: '',
                params: {
                    q: args.search,
                    key: apiKey,
                    maxResults: 30,
                    orderBy: args.sort,
                    startIndex: args.startIndex
                },
            })
        }),
        bookPage: build.query<Book, string>({
            query: (id: string) => ({
                url: id,
                params: {
                    key: apiKey
                }
            })
        })
    })
})

export const {useSearchBooksQuery, useBookPageQuery} = googleBooksApi;