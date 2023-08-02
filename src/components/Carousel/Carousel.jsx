import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';

import Spinner from '../Spinner';
import styles from './Carousel.module.css';

const variants = {
	enter: direction => {
		return {
			x: direction > 0 ? 700 : -700
		};
	},
	center: {
		zIndex: 1,
		x: 0
	},
	exit: direction => {
		return {
			zIndex: 0,
			x: direction < 0 ? 700 : -700
		};
	}
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
	return Math.abs(offset) * velocity;
};

const Carousel = ({ urlArr }) => {
	const [whatToLoad, setWhatToLoad] = useState('');
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, urlArr.length, page);

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection]);
	};

	useEffect(() => {
		const switchWindow = e => {
			if (e.keyCode === 39) {
				paginate(1);
			}
			if (e.keyCode === 37) {
				paginate(-1);
			}
		};

		window.addEventListener('keydown', switchWindow);
		return () => {
			window.removeEventListener('keydown', switchWindow);
		};
	}, [urlArr[imageIndex]]);

	return (
		<motion.div className={styles.carousel}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					onLoad={e => setWhatToLoad(e.target.attributes.src.value)}
					key={page}
					custom={direction}
					src={urlArr[imageIndex]}
					variants={variants}
					initial='enter'
					animate='center'
					exit='exit'
					transition={{ x: { type: 'tween' } }}
					drag='x'
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				/>
			</AnimatePresence>
			{whatToLoad !== urlArr[imageIndex] && <Spinner />}
			<Icon onClick={() => paginate(1)} className={styles.next} icon='mdi:chevron-right' />
			<Icon onClick={() => paginate(-1)} className={styles.prev} icon='mdi:chevron-left' />
		</motion.div>
	);
};

Carousel.propTypes = {
	urlArr: PropTypes.array
};

export default memo(Carousel);
