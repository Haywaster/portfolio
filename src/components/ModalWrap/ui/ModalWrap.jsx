import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactData, setStatusMessage } from '../../../redux/slices/contactSlice';
import { selectProjectsData, setActiveCardData } from '../../../redux/slices/projectsSlice';
import { countScroll, scrollCount } from '../../../shared/lib/utils/countScroll';
import styles from '../ModalWrap.module.css';

const ModalWrap = ({ children }) => {
	const { activeCardData } = useSelector(selectProjectsData);
	const { statusMessage } = useSelector(selectContactData);
	const dispatch = useDispatch();

	const modalRef = useRef(null);

	const onClose = () => {
		if (activeCardData) {
			dispatch(setActiveCardData(null));
		}
		if (statusMessage) {
			dispatch(setStatusMessage('idle'));
		}
	};

	useEffect(() => {
		if (activeCardData || statusMessage !== 'idle') {
			countScroll();

			const keyClose = e => {
				if (e.keyCode === 27) {
					onClose();
				}
			};

			const handleClickOutside = event => {
				if (modalRef.current && !modalRef.current.contains(event.target)) {
					onClose();
				}
			};

			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollCount}px`;

			document.addEventListener('click', handleClickOutside, true);
			document.addEventListener('keydown', keyClose);

			return () => {
				document.removeEventListener('click', handleClickOutside, true);
				document.removeEventListener('keydown', keyClose);
				document.body.style.overflowY = 'scroll';
				document.body.style.paddingRight = 0;
			};
		}
	}, [activeCardData, statusMessage]);

	return (
		<AnimatePresence>
			{(activeCardData || statusMessage !== 'idle') && (
				<motion.div className={styles.modalWrap}>
					<motion.div
						className={styles.mask}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.3 }}
					/>

					<motion.div
						ref={modalRef}
						className={statusMessage !== 'idle' ? styles.notification : styles.modal}
						initial={{ scale: 0.7, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.7, opacity: 0 }}
						transition={{ ease: 'easeInOut', duration: 0.3 }}
					>
						{children}
						{statusMessage !== 'loading' && (
							<Icon onClick={onClose} className={styles.close} icon='mdi:close' />
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

ModalWrap.propTypes = {
	modal: PropTypes.string,
	success: PropTypes.bool,
	error: PropTypes.bool,
	loading: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.array
};

export default ModalWrap;
