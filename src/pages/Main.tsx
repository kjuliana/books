import React, {useEffect, useState} from 'react';
import {useSearchBooksQuery} from "../store/googleBooks/googleBooks.api";
import Layout from "../components/Layout/Layout";
import {useAppSelector} from "../hooks/useAppSelector";
import Catalog from "../components/Catalog/Catalog";
import {Book} from "../models/models";
import Button from "../components/UI/Button/Button";
import Loader from "../components/Loader/Loader";

const Main = () => {
    const {search} = useAppSelector(state => state.search);
    const {filter} = useAppSelector(state => state.filter);
    const {sort} = useAppSelector(state => state.sort);
    const [index, setIndex] = useState(0);

    const args = {
        search: search,
        filter: filter,
        sort: sort,
        startIndex: index
    }

    const {data, isLoading, isError} = useSearchBooksQuery(args, {skip: search.length < 1});
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setIndex(0);
    }, [filter, sort, search])

    useEffect(() => {
        if (data && data.items) {
            const filteredBooks = filter === 'all'
                ? data.items
                : data.items.filter(book => book.volumeInfo.categories?.includes(filter))
            setBooks((prev) => [...prev, ...filteredBooks])
        }
    }, [data, filter])

    if (search.length < 1) return <Layout> <h1>Lets Search!</h1> </Layout>
    if (isLoading) return <Layout><Loader/></Layout>
    if (isError) return <Layout>Something went wrong</Layout>
    if (!data) return <Layout>Nothing is found</Layout>

    return (
        <Layout>
            <p>Found {data.totalItems} results</p>
            <Catalog books={books}/>
            {
                books.length > 0 && <Button onClick={() => setIndex(index + 30)} name='Load more'/>
            }
        </Layout>
    );
};

export default Main;