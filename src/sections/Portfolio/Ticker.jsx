import PropTypes from 'prop-types';
import React, { memo } from 'react';

import filtersData from '../../data/Filters.json';
import styles from './Portfolio.module.css';

const Ticker = ({ width, left }) => {
	const renderTickerElems = () => {
		const tickerElems = filtersData.map(tickerElem => (
			<div key={tickerElem.name + 'ticker'} className={styles.filter}>
				{tickerElem.name.toUpperCase()}
			</div>
		));
		return tickerElems;
	};

	const elements = renderTickerElems();

	return (
		<div className={styles.floatBar} style={{ left: left, width: width }}>
			<div className={styles.tickersRow} style={{ left: -left }}>
				{elements}
			</div>
		</div>
	);
};

Ticker.propTypes = {
	width: PropTypes.number,
	left: PropTypes.number
};

export default memo(Ticker);
