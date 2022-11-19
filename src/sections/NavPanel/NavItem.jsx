import React from 'react';

const NavItem = ({ section, sectionClassNames, setActiveSection }) => {
    return (
        <li onClick={() => setActiveSection(section)} className={sectionClassNames.join(' ')}>
            {section}
        </li>
    );
};

export default NavItem;