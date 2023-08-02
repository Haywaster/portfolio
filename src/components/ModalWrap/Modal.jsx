import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import Carousel from '../Carousel';

import styles from './ModalWrap.module.css';

const Modal = ({ activeCard }) => {
	const { name, filter, images, brief, desc, url } = activeCard;
	const urlArr = images.map(el => `/img/filling/${filter.toLowerCase()}/${name}/${el}`);

	return (
		<>
			<Carousel urlArr={urlArr} />
			<div className={styles.infoBox}>
				<div className={styles.title}>{name}</div>
				<div className={styles.tag}>{brief}</div>
				<div className={styles.detail}>{desc}</div>
				<Button
					btn='projectBtn'
					category='portfolio'
					icon={faUpRightFromSquare}
					action={() => window.open(url, '_blank')}
				>
					View code
				</Button>
			</div>
		</>
	);
};

Modal.propTypes = {
	activeCard: PropTypes.object,
	name: PropTypes.string,
	filter: PropTypes.string,
	images: PropTypes.array,
	brief: PropTypes.string,
	desc: PropTypes.string,
	url: PropTypes.string
};

export default memo(Modal);
