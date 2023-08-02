import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAbout } from '../../../../redux/slices/aboutSlice';

import Qualities from '../Qualities/Qualities';
import Skills from '../Skills/Skills';
import WhoIAm from '../WhoIAm/WhoIAm';

import styles from '../../About.module.css';

const About = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAbout());
	}, []);

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

export default About;
