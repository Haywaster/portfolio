import React, { memo } from 'react';

import Filters from './Filters';
import Gallery from './Gallery';
import Tickers from './Tickers';

import styles from '../Portfolio.module.css';

const Portfolio = () => {
	return (
		<>
			<div data-aos='fade' data-aos-anchor-placement='top-bottom' className={styles.filterWrap}>
				<Filters />
				<Tickers />
			</div>
			<Gallery />
		</>
	);
};

export default memo(Portfolio);
