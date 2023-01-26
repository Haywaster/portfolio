import './LinkTo.css'
import { Link } from 'react-scroll'

const LinkTo = ({ filling, param }) => {
    return (
        <Link
            className='link'
            to='about'
            smooth={true}
            offset={-53}
            duration={300}
        >
            <span className='btn-text'>{filling}</span>
            {param}
        </Link>
    );
};

export default LinkTo;