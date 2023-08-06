import React, { memo } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Button } from '../../../../components/Button';
import { selectData } from '../../../../redux/slices/dataSlice';
import styles from '../../Home.module.css';

const Header = () => {
	const { languageData } = useSelector(selectData);
	const { greetings, name, whoAreYou, link } = languageData.home;

	return (
		<>
			<div className={styles.area}>
				<ul className={styles.circles}>
					{[...new Array(10)].map((_, index) => (
						<li key={index}></li>
					))}
				</ul>
			</div>
			<div className={styles.context}>
				<h1 className={styles.text}>
					{greetings} <span className={styles.highlight}>{name}</span>.
					<br />
					{whoAreYou}
				</h1>
				<Button link='welcomeLink' linkText={link} icon={faArrowRight} />
			</div>
		</>
	);
};

export default memo(Header);
