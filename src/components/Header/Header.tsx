import React from 'react';
import Search from "../Search/Search";
import styles from './Header.module.css';
import SelectSection from "../UI/SelectSection/SelectSection";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useFilterActions} from "../../hooks/useFilterActions";
import {useSortActions} from "../../hooks/useSortActions";
import {useSearchActions} from "../../hooks/useSearchActions";
import {Link} from "react-router-dom";

const Header = () => {
    const {filter} = useAppSelector(state => state.filter);
    const {sort} = useAppSelector(state => state.sort);
    const {updateSearch} = useSearchActions();
    const {updateFilter} = useFilterActions();
    const {updateSort} = useSortActions();

    const onClickLogo = () => {
        updateSearch('');
        updateFilter('all');
        updateSort('relevance');
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Link to={'/'} className={styles.logo} onClick={onClickLogo}>Search for books</Link>
                <Search/>
                <div className={styles.selectSections}>
                    <SelectSection
                        options={['all', 'Art', 'Biography', 'Computers', 'History', 'Medical', 'Poetry']}
                        name='Filter'
                        selectedValue={filter}
                        onChange={(value:string) => updateFilter(value)}
                    />
                    <SelectSection
                        options={['relevance', 'newest']}
                        name='Sort by'
                        selectedValue={sort}
                        onChange={(value:string) => updateSort(value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;