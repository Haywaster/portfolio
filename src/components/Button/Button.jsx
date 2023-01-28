import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

import "./Button.css"

const Button = ({ text, action, content }) => {
    return (
        <div onClick={action} className='btn'>
            {content && <Icon className={`mdi mdi-${content}`} icon={`mdi:${content}`} />}
            {text.toUpperCase()}
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    action: PropTypes.func,
    content: PropTypes.string,
}

export default Button;