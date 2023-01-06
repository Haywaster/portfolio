import './Container.css'

const Container = ({ children, id, direction }) => {
    return (
        <>
            <section id={id}>
                <div className='container flex'>
                    <div data-aos={`fade-${direction}`} data-aos-duration="1000" className="header">{id.toUpperCase()}</div>
                    <div data-aos={`fade-${direction}`} data-aos-duration="1000" className="header-bar"></div>
                    {children}
                </div>
            </section>
        </>

    );
};

export default Container;