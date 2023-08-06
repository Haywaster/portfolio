import PropTypes from 'prop-types';
import React, { memo } from 'react';

import styles from '../Container.module.css';

import { About } from '../../../sections/About';
import { Contact } from '../../../sections/Contact';
import { Portfolio } from '../../../sections/Portfolio';

const Container = ({ id, name, direction }) => {
	return (
		<section id={id} className={styles[id]}>
			{id === 'contact' && (
				<svg
					preserveAspectRatio='none'
					viewBox='0 0 100 102'
					height='75'
					width='100%'
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M0 0 L50 100 L100 0 Z' fill='#f5f5f5' stroke='#f5f5f5'></path>
				</svg>
			)}

			<div className={styles.container}>
				<div data-aos={`fade-${direction}`} data-aos-duration='1000' className={styles.header}>
					{name.toUpperCase()}
				</div>
				<div
					data-aos={`fade-${direction}`}
					data-aos-duration='1000'
					data-aos-delay='300'
					className={styles.headerBar}
				></div>
				{id === 'about' && <About />}
				{id === 'portfolio' && <Portfolio />}
				{id === 'contact' && <Contact />}
			</div>
		</section>
	);
};

Container.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	direction: PropTypes.string
};

export default memo(Container);
