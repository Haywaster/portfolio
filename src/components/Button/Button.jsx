import './Button.css'

const Button = ({ filling, param }) => {
    return (
        <div className='btn'>
            <div className='btn-text'>{filling}</div>
            {param}
        </div>
    );
};

export default Button;