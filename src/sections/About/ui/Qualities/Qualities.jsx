import React from 'react';
import { useSelector } from 'react-redux';

import { selectAboutData } from '../../../../redux/slices/aboutSlice';

import styles from '../../About.module.css';
import QualitiesItem from '../QualitiesItem/QualitiesItem';

const Qualities = () => {
	const { qualities } = useSelector(selectAboutData);

	return (
		<div className={styles.qualities}>
			{qualities.map((elem, i) => (
				<QualitiesItem key={elem.header} num={i + 1} {...elem} />
			))}
		</div>
	);
};

export default Qualities;
