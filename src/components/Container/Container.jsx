import './Container.css'

const Container = ({ children, id }) => {
    return (
        <>
            <section id={id}>
                <div className='container flex'>
                    <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="1000" className="header">{id.toUpperCase()}</div>
                    <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-delay="500" data-aos-duration="1000" className="header-bar"></div>
                    {children}
                </div>
            </section>
        </>

    );
};

export default Container;