import './Container.css'

const Container = ({ children }) => {
    return (
        <div className='container flex'>
            <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="1000" className="header">ABOUT</div>
            <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-delay="500" data-aos-duration="1000" className="header-bar"></div>
            {children}
        </div>
    );
};

export default Container;