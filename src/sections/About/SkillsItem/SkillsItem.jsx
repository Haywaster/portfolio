import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import styles from '../About.module.css';

const SkillsItem = ({ header, width, fillMax }) => {
	const [fillItem, setFillItem] = useState(0);

	useEffect(() => {
		if (width >= fillMax) {
			setFillItem(fillMax);
		}
		return;
	}, [fillMax, width]);

	return (
		<div className={styles.bar}>
			<div className={styles.fill} style={{ width: `${fillItem}%` }}>
				<div className={styles.tag}>{header}</div>
			</div>
			<span>{fillItem}%</span>
		</div>
	);
};

SkillsItem.propTypes = {
	header: PropTypes.string,
	width: PropTypes.number,
	fillMax: PropTypes.number
};

export default SkillsItem;
