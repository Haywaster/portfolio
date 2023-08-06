import React from 'react';

import { useSelector } from 'react-redux';
import { selectPortfolioData } from '../../../redux/slices/portfolioSlice';
import styles from '../Portfolio.module.css';
import Filter from './Filter';

const Filters = () => {
	const { filters } = useSelector(selectPortfolioData);

	return (
		<>
			<div className={styles.filtersRow}>
				{filters.map(filter => (
					<Filter key={filter} name={filter.toUpperCase()} />
				))}
			</div>
		</>
	);
};

export default Filters;
