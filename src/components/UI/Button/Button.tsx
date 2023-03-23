import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    onClick: ()=>void
    name: string
}

const Button = ({onClick, name}:ButtonProps) => {
    return (
        <button className={styles.root} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;