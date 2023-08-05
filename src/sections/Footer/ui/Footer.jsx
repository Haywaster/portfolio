import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { selectContactData } from '../../../redux/slices/contactSlice';
import styles from '../Footer.module.css';

const vkStyle = { scale: '1.3' };

const Qwerty = {
	increase: { y: [0, 130, -130, 0] }
};

const Footer = () => {
	const { socialMediaData } = useSelector(selectContactData);
	const [isHovered, setHovered] = useState(false);

	const renderSocial = () => {
		return socialMediaData?.map(el => (
			<a key={el.name} href={el.url} rel='noreferrer' target='_blank'>
				<motion.div
					onMouseEnter={() => setHovered(el.name)}
					onMouseLeave={() => setHovered(false)}
					className={styles.icon}
				>
					<motion.img
						style={el.name === 'VK' ? vkStyle : null}
						transition={{ duration: 0.4 }}
						variants={isHovered === el.name ? Qwerty : null}
						animate='increase'
						src={`img/social/${el.icon}`}
						alt={el.name}
					/>
				</motion.div>
			</a>
		));
	};

	const elements = renderSocial();

	return (
		<footer className={styles.footer}>
			<Link to='home' smooth={true} duration={500}>
				<Icon className={styles.pageLink} icon='mdi:chevron-double-up' />
			</Link>

			<div className={styles.iconWrap}>{elements}</div>
			<div className={styles.footnote}>VLADIMIR STRASHKO</div>
		</footer>
	);
};

export default Footer;
