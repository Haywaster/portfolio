import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Form = ({ setSucces, setError }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_c2tyo4i",
                "template_35jjchb",
                form.current,
                "0tZMr3r7Q6rK6shwJ"
            )
            .then(
                (result) => {
                    setSucces(true);
                    console.log(result.text);
                },
                (error) => {
                    setError(true);
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" type="text" name="name" required />
            <input placeholder="Enter email" type="email" name="email" required />
            <textarea placeholder="Your Message" type="text" name="message"></textarea>
            <input type="submit" className="btn submit" id="submit" value="SUBMIT" />
        </form>
    );
};

export default Form;