import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from '../Footer.module.css';

const vkStyle = { scale: '1.3' };

const linkAnimation = {
	increase: { y: [0, 130, -130, 0] }
};

const SocialLink = ({ name, icon, url }) => {
	const [isHovered, setHovered] = useState(false);

	return (
		<a key={name} href={url} rel='noreferrer' target='_blank'>
			<motion.div
				onMouseEnter={() => setHovered(name)}
				onMouseLeave={() => setHovered(false)}
				className={styles.icon}
			>
				<motion.img
					style={name === 'VK' && vkStyle}
					transition={{ duration: 0.4 }}
					variants={isHovered === name && linkAnimation}
					animate='increase'
					src={`img/social/${icon}`}
					alt={name}
				/>
			</motion.div>
		</a>
	);
};

SocialLink.propTypes = {
	name: PropTypes.string,
	icon: PropTypes.string,
	url: PropTypes.string
};

export default SocialLink;
