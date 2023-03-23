import React from 'react';

const options = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

const Select = () => {
    return (
        <div>
            <select>
                {options.map(option => <option value={option}>option</option>)}
            </select>
        </div>
    );
};

export default Select;