import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';

import { useSelector } from 'react-redux';
import { selectProjectsData } from '../../../redux/slices/projectsSlice';
import styles from '../Portfolio.module.css';
import { switchFilterAnimation } from '../model/const';
import { MProject } from './Project';

const Gallery = () => {
	console.log('123');
	const galleryRef = useRef(null);
	const { filteredProjects } = useSelector(selectProjectsData);

	const renderProjects = () => {
		return filteredProjects?.map((item, i) => (
			<MProject
				key={item.name}
				layout
				variants={switchFilterAnimation}
				transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.1 * i }}
				{...item}
			/>
		));
	};

	const renderFilteredProjects = () => {
		return filteredProjects?.map(item => (
			<MProject
				key={item.name}
				layout
				variants={switchFilterAnimation}
				transition={{ type: 'spring', stiffness: 150, damping: 20 }}
				initial='start'
				animate='middle'
				exit='finally'
				{...item}
			/>
		));
	};

	const elements = renderProjects();
	const filteredElements = renderFilteredProjects();

	return (
		<motion.div
			initial='jumpStart'
			whileInView='jump'
			variants={switchFilterAnimation}
			className={styles.gallery}
			onViewportEnter={e => (galleryRef.current = e)}
			viewport={{ amount: 0.15, once: true }}
		>
			<AnimatePresence initial={false} mode='popLayout'>
				{!galleryRef.current?.isIntersecting ? elements : filteredElements}
			</AnimatePresence>
		</motion.div>
	);
};

Gallery.propTypes = {
	cards: PropTypes.array,
	setActiveModal: PropTypes.func
};

export default memo(Gallery);
