import './Button.css'
import { Link } from 'react-scroll'

const Button = ({ filling, param }) => {
    return (
        <Link
            className='btn'
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

export default Button;