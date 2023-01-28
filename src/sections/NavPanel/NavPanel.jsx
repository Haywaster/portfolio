import React from 'react';
import PropTypes from 'prop-types';

import sections from '../../data/Sections.json';
import NavItem from './NavItem';
import './NavPanel.css';

const renderNavPanel = () => {
    return sections.map(section => {
        return (
            <NavItem key={section.name} name={section.name} />
        );
    });
};

const elements = renderNavPanel();

const NavPanel = ({ fixPanel }) => {
    const fixedNavPanel = fixPanel ? 'fixed' : null;
    const classNames = ['flex desk', fixedNavPanel];

    return (
        <nav className={classNames.join(' ')}>
            <div className='link-wrap'>
                {elements}
            </div>
        </nav>
    );
};

NavPanel.propTypes = {
    fixPanel: PropTypes.bool,
};

export default NavPanel;