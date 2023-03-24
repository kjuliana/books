import React, {useState} from 'react';
import {useSearchActions} from "../../hooks/useSearchActions";
import styles from './Search.module.css';

const Search = () => {
    const [search, setSearch] = useState('');
    const {updateSearch} = useSearchActions();

    const onClickSearch= ( ) => {
        if (search.length > 0) {
            updateSearch(search);
        }
    }

    return (
        <form
            onSubmit={(event)=>{
                event.preventDefault();
                onClickSearch();
            }}
            className={styles.root}>
            <input
                className={styles.input}
                autoComplete='off'
                placeholder='Поиск'
                type='search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <button
                className={styles.search}
                onClick={(event)=>{
                    event.preventDefault();
                    onClickSearch();
                }}
                type="submit"
            >
                🔎
            </button>
        </form>
    );
};

export default Search;