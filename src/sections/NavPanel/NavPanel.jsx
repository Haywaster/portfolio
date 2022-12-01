import NavItem from './NavItem';
import './NavPanel.css'

const NavPanel = ({ sections }) => {
    const renderNavPanel = () => {
        return sections.map(section => {
            return (
                <NavItem key={section.id} section={section} />
            )
        })
    }

    const elements = renderNavPanel();

    return (
        <nav className='flex desk fixed'>
            <ol className='link-wrap'>
                {elements}
            </ol>
        </nav>
    );
};

export default NavPanel;