import NavItem from './NavItem';
import './NavPanel.css'

const NavPanel = ({ sections, activeSection, setActiveSection }) => {
    const navClassNames = ['flex desk'];

    const renderNavPanel = () => {
        return sections.map(section => {
            const activeClassName = activeSection === section.id ? 'active' : null;
            const sectionClassNames = ['page-link', activeClassName];
            return (
                <NavItem key={section.id} sectionClassNames={sectionClassNames} section={section.id} setActiveSection={setActiveSection} />
            )
        })
    }

    const elements = renderNavPanel()

    return (
        <nav className={navClassNames.join(' ')}>
            <ol className='link-wrap'>
                {elements}
            </ol>
        </nav>
    );
};

export default NavPanel;