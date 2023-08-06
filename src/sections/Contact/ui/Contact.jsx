import React, { memo } from 'react';

import Form from './Form';

import { useSelector } from 'react-redux';
import { selectContactData } from '../../../redux/slices/contactSlice';
import styles from '../Contact.module.css';

const Contact = () => {
	const { question } = useSelector(selectContactData);

	return (
		<>
			<div
				data-aos='fade-left'
				data-aos-duration='1000'
				data-aos-delay='800'
				className={styles.highlight}
			>
				{question}
			</div>
			<Form />
		</>
	);
};

export default memo(Contact);
