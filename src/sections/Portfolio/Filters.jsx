import React from 'react';
import Filter from './Filter';
import filtersData from '../../data/Filters.json'

const Filters = ({ ...props }) => {
    const renderFilters = () => {
        const filters = filtersData.map(fitler =>
            <Filter
                key={fitler.name}
                name={fitler.name.toUpperCase()}
                {...props}
            />);
        return filters;
    };

    const elements = renderFilters();

    return (
        <div className='flex row'>
            {elements}
        </div>
    );
};

export default Filters;