import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';
import { useActions } from '../../../shared/lib/hooks/useActions';

import styles from '../Portfolio.module.css';

const Filter = ({ name }) => {
	const { setActiveFilterSizes, setActiveFilter } = useActions();

	useEffect(() => {
		if (name === 'ALL') {
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
	switchActiveFilter: PropTypes.func
};
