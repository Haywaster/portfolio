import React from 'react';

import { useSelector } from 'react-redux';
import { selectProjectsData } from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';
import Filter from './Filter';

const Filters = () => {
	const { filters } = useSelector(selectProjectsData);

	return (
		<div className={styles.filtersRow}>
			{filters.map(filter => (
				<Filter key={filter} name={filter.toUpperCase()} />
			))}
		</div>
	);
};

export default Filters;
