import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';

import styles from './ModalWrap.module.css';

let scrollCount = 0;

const countScroll = () => {
	const div = document.createElement('div');
	div.style.overflowY = 'scroll';
	document.body.appendChild(div);
	scrollCount = div.offsetWidth - div.clientWidth;
	div.remove();
};

const ModalWrap = ({ modal, success, loading, error, onClose, children }) => {
	const ref = useRef(null);
	useEffect(() => {
		countScroll();
		const keyClose = e => {
			if (e.keyCode === 27) {
				onClose();
			}
		};

		const handleClickOutside = event => {
			if (ref.current && !ref.current.contains(event.target)) {
				onClose();
			}
		};
		if (modal || success || error || loading) {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollCount}px`;
		}

		document.addEventListener('click', handleClickOutside, true);
		document.addEventListener('keydown', keyClose);

		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('keydown', keyClose);
			document.body.style.overflowY = 'scroll';
			document.body.style.paddingRight = 0;
		};
	}, [onClose, modal, success, error, loading]);

	return (
		<AnimatePresence initial={false}>
			{success || error || modal || loading ? (
				<motion.div className={styles.modalWrap}>
					<motion.div
						className={styles.mask}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					></motion.div>

					<motion.div
						ref={ref}
						key={modal}
						className={success || error || loading ? styles.notification : styles.modal}
						initial={{ scale: 0.7, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.7, opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{children}
						{!loading && <Icon onClick={onClose} className={styles.close} icon='mdi:close' />}
					</motion.div>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
};

ModalWrap.propTypes = {
	modal: PropTypes.string,
	success: PropTypes.bool,
	error: PropTypes.bool,
	loading: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.array.isRequired
};

export default memo(ModalWrap);
