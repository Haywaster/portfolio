import PropTypes from 'prop-types';
import React, {useRef} from 'react';

import {motion} from 'framer-motion';
import {useSelector} from 'react-redux';
import {selectPortfolioData} from '../../../redux/slices/portfolioSlice';
import styles from '../Portfolio.module.css';
import {MProject} from './Project';
import {switchFilterAnimation} from '../model/const';

const Gallery = () => {
	const {filteredProjects, openCartBtn} = useSelector(selectPortfolioData);
	const firstAnimRef = useRef(false);

	return (
		<motion.div
			whileInView={!firstAnimRef.current ? 'jump' : ''}
			initial={!firstAnimRef.current ? 'jumpStart' : 'start'}
			animate={!firstAnimRef.current ? '' : 'middle'}
			onViewportEnter={(e) => firstAnimRef.current = e.isIntersecting}
			viewport={{amount: 0.15, once: true}}
			className={styles.gallery}
		>
			{/*<AnimatePresence initial={!firstAnimRef.current} mode='popLayout' >*/}
			{filteredProjects.map((item, index) => (
				<MProject
					layout
					transition={{type: 'spring', stiffness: 150, damping: 20}}
					key={item.name}
					openCartBtn={openCartBtn}
					custom={index + 1}
					variants={switchFilterAnimation}
					{...item} />
			))}
			{/*			</AnimatePresence>*/}
		</motion.div>
	);
};

Gallery.propTypes = {
	cards: PropTypes.array,
	setActiveModal: PropTypes.func
};

export default Gallery;
