import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import projects from '../../data/Projects.json';

const Filter = ({ name, setWidth, setLeft, setCards }) => {
    const elem = useRef();

    let activeClass = name ? 'active-filter' : null;
    let clazzNames = ['filter', activeClass];

    useEffect(() => {
        if (name === 'ALL') {
            setWidth(elem.current.offsetWidth)
            setLeft(elem.current.offsetLeft)
        }
    }, [])

    const switchFilter = e => {
        setCards(name === 'ALL' ? projects : projects.filter(project => project.filter.toUpperCase() === name))
        setWidth(e.target.offsetWidth)
        setLeft(e.target.offsetLeft)
    }

    return (
        <div
            ref={elem}
            onClick={e => switchFilter(e)}
            className={clazzNames.join(' ')}>
            {name}
        </div>
    );
};

Filter.propTypes = {
    name: PropTypes.string,
    setWidth: PropTypes.func,
    setLeft: PropTypes.func,
    setCards: PropTypes.func,
};

export default memo(Filter);