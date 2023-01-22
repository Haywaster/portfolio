import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Form = () => {
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
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" type="text" name="name" required />
                <input placeholder="Enter email" type="email" name="email" required />
                <textarea placeholder="Your Message" type="text" name="message"></textarea>
                <div id="success">
                    <div>
                        Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
                    </div>
                </div>
                <input type="submit" className="btn submit" id="submit" value="SUBMIT" />
            </form>
        </div>
    );
};

export default Form;