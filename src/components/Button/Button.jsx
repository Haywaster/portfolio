import React from 'react';
import { Icon } from '@iconify/react';

import "./Button.css"

const Button = ({ text, action, content }) => {
    return (
        <div onClick={action} className='btn'>
            {content && <Icon className={`mdi mdi-${content}`} icon={`mdi:${content}`} />}
            {text.toUpperCase()}
        </div>
    );
};

export default Button;