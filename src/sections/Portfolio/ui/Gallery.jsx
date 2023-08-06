import PropTypes from 'prop-types';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectPortfolioData } from '../../../redux/slices/portfolioSlice';
import styles from '../Portfolio.module.css';
import { switchFilterAnimation } from '../model/const';
import Project from './Project';

const Gallery = () => {
	const { filteredProjects, openCartBtn, activeFilter } = useSelector(selectPortfolioData);

	const renderProjects = () => {
		return filteredProjects.map(item => (
			<Project key={item.name} openCartBtn={openCartBtn} {...item} />
		));
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
