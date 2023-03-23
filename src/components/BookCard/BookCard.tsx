import React from 'react';
import {Book} from "../../models/models";
import styles from './BookCard.module.css';
import {Link} from "react-router-dom";

interface BookCardProps {
    book: Book
}

const BookCard = ({book}: BookCardProps) => {
    return (
        <Link to={book.id} className={styles.root}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={book.volumeInfo.imageLinks?.thumbnail} alt='Book image'/>
            </div>
            <div className={styles.info}>
                <p className={styles.notes}>{book.volumeInfo.categories?.[0]??'No one category'}</p>
                <p className={styles.name}>{book.volumeInfo.title}</p>
                <div>
                    {
                        book.volumeInfo.authors?.map((author, index) => (
                            <span key={author}>{index > 0 && ', '}{author}</span>
                        ))}
                </div>
            </div>
        </Link>
    );
};

export default BookCard;