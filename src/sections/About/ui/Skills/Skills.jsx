import React, { useState } from 'react';

import SkillsItem from '../SkillsItem/SkillsItem';

import { useSelector } from 'react-redux';
import { selectAboutData } from '../../../../redux/slices/aboutSlice';
import styles from '../../About.module.css';

const Skills = () => {
	const { skills } = useSelector(selectAboutData);
	const [fillMax, setFillMax] = useState(0);

	const renderSkills = () => {
		return skills.map(skill => <SkillsItem key={skill.header} fillMax={fillMax} {...skill} />);
	};

	const elements = renderSkills();

	const setFilling = event => {
		if (event.propertyName === 'transform') {
			const filling = setInterval(() => {
				setFillMax(prev => {
					if (prev >= 100 - 1) {
						clearInterval(filling);
					}
					return prev + 1;
				});
			}, 10);
		}
	};

	return (
		<div
			onTransitionEnd={setFilling}
			data-aos='fade-left'
			data-aos-duration='1000'
			className={styles.barsWrap}
		>
			{elements}
		</div>
	);
};

export default Skills;
