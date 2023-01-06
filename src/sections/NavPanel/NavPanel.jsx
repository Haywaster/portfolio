import NavItem from './NavItem';
import sections from '../../data/sections.json'
import './NavPanel.css'

const NavPanel = ({ fixPanel }) => {
    const fixedNavPanel = fixPanel ? 'fixed' : null;
    const classNames = ['flex desk', fixedNavPanel];
    const renderNavPanel = () => {
        return sections.map(section => {
            return (
                <NavItem key={section.name} section={section} />
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