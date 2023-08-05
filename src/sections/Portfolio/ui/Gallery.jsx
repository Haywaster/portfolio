import PropTypes from 'prop-types';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectProjectsData } from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';
import Project from './Project';

const Gallery = () => {
	const { filteredProjects } = useSelector(selectProjectsData);

	const renderProjects = () => {
		return filteredProjects?.map(item => <Project key={item.name} {...item} />);
	};

	const elements = renderProjects();

	return (
		<motion.div
			initial='jumpStart'
			whileInView='jump'
			variants={switchFilterAnimation}
			viewport={{ amount: 0.15, once: true }}
			className={styles.gallery}
		>
			<AnimatePresence initial={false} mode='popLayout'>
				{elements}
			</AnimatePresence>
		</motion.div>
	);
};

Gallery.propTypes = {
	cards: PropTypes.array,
	setActiveModal: PropTypes.func
};

export default Gallery;
