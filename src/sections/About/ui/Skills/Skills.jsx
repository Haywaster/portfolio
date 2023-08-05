import React, { useState } from 'react';

import SkillsItem from '../SkillsItem/SkillsItem';

import { useSelector } from 'react-redux';
import { selectAboutData } from '../../../../redux/slices/aboutSlice';
import styles from '../../About.module.css';

const Skills = () => {
	const { skills } = useSelector(selectAboutData);
	const [fillMax, setFillMax] = useState(0);

	const setFilling = event => {
		if (event.propertyName !== 'transform') return;

		const interval = setInterval(() => {
			setFillMax(prev => {
				if (prev >= 100 - 1) {
					clearInterval(interval);
				}
				return prev + 1;
			});
		}, 10);
	};

	return (
		<div
			onTransitionEnd={setFilling}
			data-aos='fade-left'
			data-aos-duration='1000'
			className={styles.barsWrap}
		>
			{skills?.map(skill => (
				<SkillsItem key={skill.header} fillMax={fillMax} {...skill} />
			))}
		</div>
	);
};

export default Skills;
