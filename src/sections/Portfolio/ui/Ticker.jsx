import PropTypes from 'prop-types';
import React from 'react';

import { useSelector } from 'react-redux';
import { selectProjectsData } from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';

const Ticker = () => {
	const { filters, activeFilterSizes } = useSelector(selectProjectsData);
	const { width, left } = activeFilterSizes;

	return (
		<div className={styles.floatBar} style={{ left, width }}>
			<div className={styles.tickersRow} style={{ left: -left }}>
				{filters.map(tickerElem => (
					<div key={tickerElem + 'ticker'} className={styles.filter}>
						{tickerElem.toUpperCase()}
					</div>
				))}
			</div>
		</div>
	);
};

Ticker.propTypes = {
	width: PropTypes.number,
	left: PropTypes.number
};

export default Ticker;
