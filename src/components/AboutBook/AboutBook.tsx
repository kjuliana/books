import React from 'react';
import {VolumeInfo} from "../../models/models";
import styles from './AboutBook.module.css';
import {useIsMobile} from "../../hooks/useIsMobile";

interface AboutBookProps {
    book: VolumeInfo
}
const AboutBook = ({book}: AboutBookProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={styles.root}>
            {
                isMobile &&
                <span className={styles.notes}>
                        {book.categories?.map((category, index) => (
                            `${index > 0 ? ', ' : ''}${category}`
                        )) || 'No category'}
                    </span>
            }
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={book.imageLinks.thumbnail} alt='Book image'/>
            </div>
            <div className={styles.infoWrapper}>
                {
                    !isMobile &&
                    <span className={styles.notes}>
                        {book.categories?.map((category, index) => (
                            `${index > 0 ? ', ' : ''}${category}`
                        )) || 'No category'}
                    </span>
                }
                <p className={styles.importantText}>{book.title}</p>
                <span className={styles.notes}>
                    {book.authors?.map((author, index) => (
                        `${index > 0 ? ', ' : ''}${author}`
                    )) || 'No author'}
                </span>
                <div className={styles.textWrapper}>
                    {book.description || 'Description is empty. But your are so cute!'}
                </div>
            </div>
        </div>
    );
};

export default AboutBook;