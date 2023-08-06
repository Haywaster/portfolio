import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';
import { useActions } from '../../../shared/lib/hooks/useActions';

import { useSelector } from 'react-redux';
import { selectPortfolioData } from '../../../redux/slices/portfolioSlice';
import styles from '../Portfolio.module.css';

const Filter = ({ name }) => {
	const { allFilter, activeFilter } = useSelector(selectPortfolioData);
	const { setActiveFilterSizes, setActiveFilter } = useActions();

	useEffect(() => {
		if (name === allFilter && name === activeFilter) {
			setActiveFilterSizes([filterRef.current.offsetWidth, 'width']);
			setActiveFilterSizes([filterRef.current.offsetLeft, 'left']);
		}
	}, []);

	const switchActiveFilter = (e, name) => {
		setActiveFilter(name);
		setActiveFilterSizes([e.target.offsetWidth, 'width']);
		setActiveFilterSizes([e.target.offsetLeft, 'left']);
	};

	const filterRef = useRef();
	return (
		<div ref={filterRef} onClick={e => switchActiveFilter(e, name)} className={styles.filter}>
			{name}
		</div>
	);
};

export default memo(Filter);

Filter.propTypes = {
	name: PropTypes.string,
	allFilter: PropTypes.string,
	switchActiveFilter: PropTypes.func
};
