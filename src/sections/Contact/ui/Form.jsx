import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { Button } from '../../../components/Button';

import { useSelector } from 'react-redux';
import { selectContactData } from '../../../redux/slices/contactSlice';
import { useActions } from '../../../shared/lib/hooks/useActions';
import styles from '../Contact.module.css';

const Form = () => {
	const { form } = useSelector(selectContactData);
	const { placeholders, submitBtn } = form;
	const { name, email, area } = placeholders;
	const { sendMessage } = useActions();

	const formRef = useRef(null);

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
			<input placeholder={name} type='text' name='name' required />
			<input placeholder={email} type='email' name='email' required />
			<textarea placeholder={area} type='text' name='message'></textarea>
			<Button btn='submit' category='form' type='submit'>
				{submitBtn}
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
