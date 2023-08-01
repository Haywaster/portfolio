import React, { memo } from 'react';

import filtersData from '../../data/Filters.json';
import Filter from './Filter';
import styles from './Portfolio.module.css';

const Filters = ({ ...props }) => {
	const renderFilters = () => {
		const filters = filtersData.map(filter => (
			<Filter key={filter.name} name={filter.name.toUpperCase()} {...props} />
		));
		return filters;
	};

	const elements = renderFilters();

	return <div className={styles.filtersRow}>{elements}</div>;
};

export default memo(Filters);
