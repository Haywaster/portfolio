import React from 'react';
import './Contact.css'
import Form from './Form';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_c2tyo4i",
                "template_gprv6jb",
                form.current,
                "0tZMr3r7Q6rK6shwJ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
                setActiveForm(""),
                setActiveSucc("succ-active")
            );
    };

    return (
        <div>
            <div className='highlight'>Have a question or want to work together?</div>
            <Form />
        </div>
    );
};

export default Contact;