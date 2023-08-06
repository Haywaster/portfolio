import PropTypes from 'prop-types';
import React from 'react';

import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../../Button';
import { Carousel } from '../../../Carousel';

import { useSelector } from 'react-redux';
import { selectPortfolioData } from '../../../../redux/slices/portfolioSlice';
import styles from '../../ModalWrap.module.css';

const Modal = ({ activeCardData }) => {
	const { openCodeBtn } = useSelector(selectPortfolioData);
	const { name, id, filter, images, brief, desc, url } = activeCardData;
	const urlArr = images.map(el => `/img/filling/${filter.toLowerCase()}/${id}/${el}`);

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
					{openCodeBtn}
				</Button>
			</div>
		</>
	);
};

Modal.propTypes = {
	activeCardData: PropTypes.object
};

export default Modal;
