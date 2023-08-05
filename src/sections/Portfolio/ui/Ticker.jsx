import PropTypes from 'prop-types';
import React, { memo } from 'react';

import styles from '../Portfolio.module.css';

const Ticker = ({ name }) => {
	return <div className={styles.filter}>{name}</div>;
};

Ticker.propTypes = {
	name: PropTypes.string
};

export default memo(Ticker);
