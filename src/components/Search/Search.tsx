import React, {useState} from 'react';
import {useSearchActions} from "../../hooks/useSearchActions";
import styles from './Search.module.css';
import {Link} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState('');
    const {updateSearch} = useSearchActions();

    const onClickSearch = () => {
        if (search.length > 0) {
            updateSearch(search);
        }
    }

    return (
        <div className={styles.root}>
            <input
                className={styles.input}
                autoComplete='off'
                placeholder='Поиск'
                type='search'
                onChange={e => setSearch(e.target.value)}
            />
            <Link
                to={'/'}
                className={styles.search}
                onClick={onClickSearch}
            >
                🔎
            </Link>
        </div>
    );
};

export default Search;