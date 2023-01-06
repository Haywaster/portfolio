import React from 'react';
import "./Button.css"

const Button = ({ text }) => {
    return (
        <div className='btn'>
            {text.toUpperCase()}
        </div>
    );
};

export default Button;