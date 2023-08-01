import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';

import Filters from './Filters';
import Gallery from './Gallery';
import Ticker from './Ticker';

import styles from './Portfolio.module.css';

const Portfolio = ({ cards, setCards, setActiveModal }) => {
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);

	return (
		<>
			<div data-aos='fade' data-aos-anchor-placement='top-bottom' className={styles.filterWrap}>
				<Filters setCards={setCards} setWidth={setWidth} setLeft={setLeft} />
				<Ticker left={left} width={width} />
			</div>
			<Gallery cards={cards} setActiveModal={setActiveModal} />
		</>
	);
};

Portfolio.propTypes = {
	cards: PropTypes.array,
	setCards: PropTypes.func,
	setActiveModal: PropTypes.func
};

export default memo(Portfolio);
