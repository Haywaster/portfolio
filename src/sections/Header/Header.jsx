import LinkTo from '../../components/LinkTo/LinkTo';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <div className="context flex">
                <div className='text'>
                    Hello, I'm<span className="highlight"> Strashko Vladimir</span>.
                    <br />
                    I'm a frontend developer.
                </div>
                <LinkTo
                    filling={'View my work'}
                    param={
                        <FontAwesomeIcon className='arrow' icon={faArrowRight} />
                    } />
            </div>
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
        </>
    );
};

export default Header;