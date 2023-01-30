/* eslint-disable */

import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import PropTypes from 'prop-types';

const Form = ({ setSucces, setError, setLoading, loading }) => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .sendForm(
                "service_c2tyo4i",
                "template_35jjchb",
                form.current,
                "0tZMr3r7Q6rK6shwJ"
            )
            .then(
                () => {
                    setSucces(true);
                    setLoading(false);
                },
                () => {
                    setError(true);
                }
            );
        e.target.reset();
    };

    return (
        <form data-aos="zoom-in-up" data-aos-delay="1100" ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Enter email" type="email" name="email" required />
            <textarea placeholder="Your Message" type="text" name="message"></textarea>
            <input type="submit" className="btn submit" id="submit" value="SUBMIT" />
        </form>
    );
};

Form.propTypes = {
    setSucces: PropTypes.func,
    setError: PropTypes.func,
    setLoading: PropTypes.func,
};

export default Form;