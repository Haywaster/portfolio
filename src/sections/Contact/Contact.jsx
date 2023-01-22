import React from 'react';
import './Contact.css'

import Form from './Form';

const Contact = ({ ...props }) => {
    return (
        <div>
            <div className='highlight'>Have a question or want to work together?</div>
            <Form {...props} />
        </div>
    );
};

export default Contact;