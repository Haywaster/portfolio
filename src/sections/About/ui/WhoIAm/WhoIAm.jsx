import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';

import { useSelector } from 'react-redux';
import { selectAboutData } from '../../../../redux/slices/aboutSlice';
import styles from '../../About.module.css';

const WhoIAm = ({ direction }) => {
	const { whoIAm } = useSelector(selectAboutData);
	const { question, aboutMe, mySkills, link } = whoIAm;

	return (
		<div data-aos={`fade-${direction}`} data-aos-duration='1000' className={styles.wrapper}>
			<img src='/img/me.png' className={styles.me} alt="I'm" />
			<div className={styles.label}>{question}</div>
			<div>
				<p>{aboutMe}</p>
				<p>{mySkills}</p>
				<Link to='contact' smooth={true}>
					<span className={styles.highlight}>{link}</span>
				</Link>
			</div>
		</div>
	);
};

WhoIAm.propTypes = {
	direction: PropTypes.string
};

export default WhoIAm;
