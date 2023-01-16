import React from 'react';
import projects from '../../data/Projects.json';

const Filter = ({ name, setWidth, setLeft, setCards }) => {
    let activeClass = name ? 'active-filter' : null;
    let clazzNames = ['filter', activeClass];

    const switchFilter = e => {
        setCards(name === 'ALL' ? projects : projects.filter(project => project.filter.toUpperCase() === name))
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