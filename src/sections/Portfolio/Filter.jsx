import React from 'react';

const Filter = ({ name, activeFilterName, setActiveFilterName, setWidth, setLeft }) => {
    let activeClass = activeFilterName === name ? 'active-filter' : null;
    let clazzNames = ['filter', activeClass];

    const switchFilter = (e) => {
        setActiveFilterName(name.toUpperCase())
        setWidth(e.target.offsetWidth)
        setLeft(e.target.offsetLeft)
    }

    return (
        <div
            onClick={e => switchFilter(e)}
            className={clazzNames.join(' ')}>
            {name}
        </div>
    );
};

export default Filter;