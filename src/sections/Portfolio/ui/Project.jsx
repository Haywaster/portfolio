import PropTypes from 'prop-types';
import React, { forwardRef, memo } from 'react';

import { useDispatch } from 'react-redux';
import { setActiveCardData } from '../../../redux/slices/projectsSlice';

import { motion } from 'framer-motion';

import { Button } from '../../../components/Button';

import styles from '../Portfolio.module.css';

const Project = forwardRef(({ name, preview, filter }, ref) => {
	const dispatch = useDispatch();

	return (
		<motion.div ref={ref} className={styles.mix}>
			<img
				className={styles.card}
				src={`/img/preview/${filter.toLowerCase()}/${preview}`}
				alt={name}
			/>
			<div className={styles.text}>
				<div className={styles.bold}>{name}</div>
				<span className={styles.highlight}>{filter}</span>
			</div>
			<Button category='portfolio' btn='mixBtn' action={() => dispatch(setActiveCardData(name))}>
				Learn more
			</Button>
		</motion.div>
	);
});

Project.displayName = 'Project';

Project.propTypes = {
	name: PropTypes.string,
	preview: PropTypes.string,
	filter: PropTypes.string,
	setActiveModal: PropTypes.func
};

export const MProject = memo(motion(Project));
