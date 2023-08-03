import PropTypes from 'prop-types';
import React from 'react';

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../Button';
import { Carousel } from '../../Carousel';

import styles from '../ModalWrap.module.css';

const Modal = ({ activeCardData }) => {
	const { name, filter, images, brief, desc, url } = activeCardData;
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
	activeCardData: PropTypes.object
};

export default Modal;
