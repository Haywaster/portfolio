import React, { memo } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import styles from './Header.module.css';

const Header = () => {
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
					Hello, I&apos;m <span className={styles.highlight}>Vladimir Strashko</span>.
					<br />
					I&apos;m a frontend developer.
				</h1>
				<Button link='welcomeLink' icon={faArrowRight} />
			</div>
		</>
	);
};

export default memo(Header);
