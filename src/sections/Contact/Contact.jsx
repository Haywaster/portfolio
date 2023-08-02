import React, { memo } from 'react';

import Form from './Form';

import styles from './Contact.module.css';

const Contact = props => {
	return (
		<>
			<div
				data-aos='fade-left'
				data-aos-duration='1000'
				data-aos-delay='800'
				className={styles.highlight}
			>
				Have a question or want to work together?
			</div>
			<Form {...props} />
		</>
	);
};

export default memo(Contact);
