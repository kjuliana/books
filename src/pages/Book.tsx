import React from 'react';
import {useBookPageQuery} from "../store/googleBooks/googleBooks.api";
import {useParams} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import AboutBook from "../components/AboutBook/AboutBook";
import Loader from "../components/Loader/Loader";

const Book = () => {
    let params = useParams();
    const id = params.id ?? '';
    const {data, isError, isLoading} = useBookPageQuery(id);
    if (isLoading) return <Layout><Loader/></Layout>
    if (!data || isError) return <Layout>Идите обратно</Layout>
    return (
        <Layout>
            <AboutBook book={data.volumeInfo}/>
        </Layout>
    );
};

export default Book;