import React from 'react';

import QualitiesData from '../../../data/Qualities.json';
import QualitiesItem from '../QualitiesItem/QualitiesItem';

import styles from '../About.module.css';

const renderQualities = array => {
	const newArray = array
		.map((elem, i) => (
			<QualitiesItem
				key={elem.header}
				num={i + 1}
				picture={elem.picture}
				header={elem.header}
				desc={elem.desc}
			/>
		))
		.reduce((acc, c, i) => {
			if (i % 2 === 0) acc.push([]);
			acc[acc.length - 1].push(c);
			return acc;
		}, []);

	return newArray.map((arrayGroup, i) => (
		<div key={i} className={styles.couple}>
			{arrayGroup}
		</div>
	));
};

const elements = renderQualities(QualitiesData);

const Qualities = () => {
	return <div className={styles.qualities}>{elements}</div>;
};

export default Qualities;
