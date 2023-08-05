import React, { memo } from 'react';

import Qualities from '../Qualities/Qualities';
import Skills from '../Skills/Skills';
import WhoIAm from '../WhoIAm/WhoIAm';

import styles from '../../About.module.css';

const About = () => {
	return (
		<>
			<Qualities />
			<div className={styles.skillsWrapper}>
				<WhoIAm direction='right' />
				<Skills />
			</div>
		</>
	);
};

export default memo(About);
