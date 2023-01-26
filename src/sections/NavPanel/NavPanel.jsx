import React from 'react';

import sections from '../../data/Sections.json';
import NavItem from './NavItem';
import './NavPanel.css';

const NavPanel = ({ fixPanel }) => {
    const fixedNavPanel = fixPanel ? 'fixed' : null;
    const classNames = ['flex desk', fixedNavPanel];

    const renderNavPanel = () => {
        return sections.map(section => {
            return (
                <NavItem key={section.name} name={section.name} />
            );
        });
    };

    const elements = renderNavPanel();

    return (
        <nav className={classNames.join(' ')}>
            <div className='link-wrap'>
                {elements}
            </div>
        </nav>
    );
};

export default NavPanel;