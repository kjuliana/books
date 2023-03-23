import React from 'react';
import styles from './SelectSection.module.css';

interface SelectSectionProps {
    options: string[],
    name: string,
    selectedValue: string,
    onChange: (value:string)=>{}
}

const SelectSection = ({name, options, selectedValue, onChange}: SelectSectionProps) => {
    return (
        <div className={styles.root}>
            <span>{name} </span>
            <select
                className={styles.section}
                value={selectedValue}
                name={name}
                onChange={event => onChange(event.target.value)}
            >
                {options.map(option =>
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                )}
            </select>
        </div>
    );
};

export default SelectSection;