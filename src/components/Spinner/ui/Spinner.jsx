import React from 'react';
import styles from '../Spinner.module.css';

const Spinner = () => {
	return (
		<div className={styles.cssloadLoader}>
			<div className={styles.cssloadOne}></div>
			<div className={styles.cssloadTwo}></div>
			<div className={styles.cssloadThree}></div>
		</div>
	);
};

export default Spinner;
