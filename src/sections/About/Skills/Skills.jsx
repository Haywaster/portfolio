import React, { useState } from 'react';

import { skills } from '../../../data/Skills';
import SkillsItem from '../SkillsItem/SkillsItem';

import styles from '../About.module.css';

const Skills = () => {
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
