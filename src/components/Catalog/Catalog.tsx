import React from 'react';
import {Book} from "../../models/models";
import BookCard from "../BookCard/BookCard";
import styles from './Catalog.module.css';

interface CatalogProps {
    books: Book[]
}

const Catalog = ({books}: CatalogProps) => {
    return (
        <div className={styles.root}>
            {books.map((book) => <BookCard key={book.id+book.etag} book={book}/>)
            }
        </div>
    );
};

export default Catalog;