import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import Button from '../../components/Button';

import styles from './Contact.module.css';

const Form = ({ setSuccess, setError, setLoading }) => {
	const form = useRef(null);

	const sendEmail = e => {
		e.preventDefault();
		setLoading(true);
		emailjs.sendForm('service_c2tyo4i', 'template_35jjchb', form.current, '0tZMr3r7Q6rK6shwJ').then(
			() => {
				setSuccess(true);
				setLoading(false);
			},
			() => {
				setError(true);
			}
		);
		e.target.reset();
	};

	return (
		<form
			className={styles.contact}
			data-aos='zoom-in-up'
			data-aos-delay='1100'
			ref={form}
			onSubmit={sendEmail}
		>
			<input placeholder='Name' type='text' name='name' required />
			<input placeholder='Enter email' type='email' name='email' required />
			<textarea placeholder='Your Message' type='text' name='message'></textarea>
			<Button btn='submit' category='form' type='submit'>
				Submit
			</Button>
		</form>
	);
};

Form.propTypes = {
	setSuccess: PropTypes.func,
	setError: PropTypes.func,
	setLoading: PropTypes.func
};

export default Form;
