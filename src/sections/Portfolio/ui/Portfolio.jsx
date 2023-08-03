import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Filters from './Filters';
import Gallery from './Gallery';
import Ticker from './Ticker';

import { useDispatch } from 'react-redux';
import { fetchPortfolio } from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';

const Portfolio = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPortfolio());
	}, []);

	return (
		<>
			<div data-aos='fade' data-aos-anchor-placement='top-bottom' className={styles.filterWrap}>
				<Filters />
				<Ticker />
			</div>
			<Gallery />
		</>
	);
};

Portfolio.propTypes = {
	cards: PropTypes.array,
	setCards: PropTypes.func,
	setActiveModal: PropTypes.func
};

export default Portfolio;
