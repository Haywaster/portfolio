import React, { useState, useEffect } from 'react';
import './NavPanel.css'

// Если пользователь находится на определенной секции на сайте, то 

const NavPanel = () => {
    const [sections, setSections] = useState([])

    useEffect(() => {
        const secs = []
        document.querySelectorAll('section').forEach(section => secs.push(section.id))
        setSections(secs)
    }, [])

    const renderNavPanel = () => {
        return sections.map(section => {
            const activeClassName = document.location.hash === `#${section}` ? 'active' : null;
            const sectionClassNames = ['page-link', activeClassName];
            return (
                <li key={section}>
                    <a className={sectionClassNames.join(' ')} href={`#${section}`}>{section}</a>
                </li>
            )
        })
    }

    const elements = renderNavPanel()

    return (
        <ol className='link-wrap'>
            {elements}
        </ol>
    );
};

export default NavPanel;