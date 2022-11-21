import NavItem from './NavItem';
import './NavPanel.css'

const NavPanel = ({ sections, activeSection, setActiveSection, setClick }) => {
    const navClassNames = ['flex desk fixed'];

    const renderNavPanel = () => {
        return sections.map(section => {
            const activeClassName = activeSection === section.id ? 'active' : null;
            const sectionClassNames = ['page-link', activeClassName];
            return (
                <NavItem key={section.id} sectionClassNames={sectionClassNames} section={section} activeSection={activeSection} setActiveSection={setActiveSection} setClick={setClick} />
            )
        })
    }

    const elements = renderNavPanel()

    return (
        <nav className={navClassNames.join(' ')}>
            <ol className={activeSection ? 'link-wrap active' : 'link-wrap'}>
                {elements}
            </ol>
        </nav>
    );
};

export default NavPanel;