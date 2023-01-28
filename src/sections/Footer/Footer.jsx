import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';

import social from '../../data/Footer.json';
import './Footer.css';

const vkStyle = { scale: '1.3' };

const Qwerty = {
    increace: { y: [0, 130, -130, 0] }
};

const Footer = () => {
    const [isHovered, setHovered] = useState(false)

    const renderSocial = () => {
        return social.map(el =>
            <a key={el.name} href={el.url} rel="noreferrer" target="_blank">
                <motion.div
                    onMouseEnter={() => setHovered(el.name)}
                    onMouseLeave={() => setHovered(false)}
                    className='flex icon'>
                    <motion.img
                        style={el.name === 'VK' ? vkStyle : null}
                        transition={{ duration: 0.4 }}
                        variants={isHovered === el.name ? Qwerty : null}
                        animate='increace'
                        src={`img/social/${el.icon}`}
                        alt={el.name} />
                </motion.div>
            </a>
        );
    };

    const elements = renderSocial();

    return (
        <footer>
            <Link to='home' smooth={true} duration={500}>
                <Icon className="mdi mdi-chevron-double-up page-link" icon="mdi:chevron-double-up" />
            </Link>
            <div
                className='icon-wrap flex row'>
                {elements}
            </div>
            <div className="footnote">
                VLADIMIR STRASHKO
            </div>
        </footer>
    );
};

export default Footer;