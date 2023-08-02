import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-scroll';

import styles from '../../About.module.css';

const WhoIAm = ({ direction }) => {
	return (
		<div data-aos={`fade-${direction}`} data-aos-duration='1000' className={styles.wrapper}>
			<img src='/img/me.webp' className={styles.me} alt="I'm" />
			<div className={styles.label}>Who&apos;s this guy?</div>
			<div>
				<p>I&apos; m a Front-End Developer in Tomsk, Russia.</p>
				<p>
					I have serious passion for UI effects, animations and creating intuitive, dynamic user
					experiences.
				</p>
				<Link to='contact' smooth={true}>
					<span className={styles.highlight}>Let&apos;s make something special.</span>
				</Link>
			</div>
		</div>
	);
};

WhoIAm.propTypes = {
	direction: PropTypes.string
};

export default WhoIAm;
