import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../About.module.css';

const QualitiesItem = ({ picture, header, desc, num }) => {
	return (
		<div className={styles.bulletWrap}>
			<div data-aos='flip-right' data-aos-delay={num * 100} className={styles.hexWrap}>
				<div className={styles.hexagon}>
					<Icon className={`mdi mdi-${picture}`} icon={`mdi:${picture}`} />
				</div>
			</div>
			<div data-aos='fade' data-aos-delay={num * 100}>
				<div className={styles.label}>{header}</div>
				<div>{desc}</div>
			</div>
		</div>
	);
};

QualitiesItem.propTypes = {
	picture: PropTypes.string,
	header: PropTypes.string,
	desc: PropTypes.string,
	num: PropTypes.number
};

export default QualitiesItem;
