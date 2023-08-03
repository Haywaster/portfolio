import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	selectProjectsData,
	setActiveFilter,
	setActiveFilterSizes
} from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';

const Filter = ({ name }) => {
	const { activeFilter } = useSelector(selectProjectsData);
	const dispatch = useDispatch();

	const filterRef = useRef();

	let activeClass = name === activeFilter ? 'active' : '';
	let classNames = [styles.filter, activeClass];

	useEffect(() => {
		if (name === 'ALL') {
			dispatch(setActiveFilterSizes([filterRef.current.offsetWidth, 'width']));
			dispatch(setActiveFilterSizes([filterRef.current.offsetLeft, 'left']));
		}
	}, []);

	const switchActiveFilter = (e, name) => {
		dispatch(setActiveFilter(name));
		dispatch(setActiveFilterSizes([e.target.offsetWidth, 'width']));
		dispatch(setActiveFilterSizes([e.target.offsetLeft, 'left']));
	};

	return (
		<div
			ref={filterRef}
			onClick={e => switchActiveFilter(e, name)}
			className={classNames.join(' ')}
		>
			{name}
		</div>
	);
};

export default Filter;

Filter.propTypes = {
	name: PropTypes.string,
	setWidth: PropTypes.func,
	setLeft: PropTypes.func,
	setCards: PropTypes.func
};
