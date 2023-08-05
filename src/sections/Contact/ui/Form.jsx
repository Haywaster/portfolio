import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { Button } from '../../../components/Button';

import { useActions } from '../../../shared/lib/hooks/useActions';
import styles from '../Contact.module.css';

const Form = () => {
	const formRef = useRef(null);
	const { sendMessage } = useActions();

	const sendEmail = e => {
		e.preventDefault();

		sendMessage(formRef.current);

		e.target.reset();
	};

	return (
		<form
			className={styles.contact}
			data-aos='zoom-in-up'
			data-aos-delay='1100'
			ref={formRef}
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
