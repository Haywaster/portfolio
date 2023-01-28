import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import LinkTo from '../../components/LinkTo';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="context flex">
                <h1 className='text'>
                    Hello, I&apos;m <span className="highlight">Vladimir Strashko</span>.
                    <br />
                    I&apos;m a frontend developer.
                </h1>
                <LinkTo
                    filling={'View my work'}
                    param={
                        <FontAwesomeIcon className='arrow' icon={faArrowRight} />
                    } />
            </div>
        </>
    );
};

export default memo(Header);