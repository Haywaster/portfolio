import './LinkTo.css'
import { Link } from 'react-scroll'

const LinkTo = ({ filling, param }) => {
    return (
        <Link
            className='link'
            to='portfolio'
            smooth={true}
            offset={-53}
            duration={200}
        >
            <div className='btn-text'>{filling}</div>
            {param}
        </Link>
    );
};

export default LinkTo;