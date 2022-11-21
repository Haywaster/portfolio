import { useRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';

import './Container.css'

const Container = ({ children, id, sections, setSections, activeSection, setActiveSection, click, setClick }) => {
    const myRef = useRef();

    // const { ref: inViewRef } = useInView({
    //     triggerOnce: false,
    //     threshold: 0.74,
    //     skip: click,
    //     onChange: (inView, entry) => {
    //         if (inView) {
    //             setActiveSection(id)
    //         }
    //     },
    // });

    // const setRefs = useCallback((node) => {
    //     myRef.current = node
    //     inViewRef(node);
    // }, [inViewRef])


    useEffect(() => {
        setSections(prev => [...prev, myRef.current])
    }, [])

    return (
        <section ref={myRef} id={id}>
            <div className='container flex'>
                <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-duration="1000" className="header">{id.toUpperCase()}</div>
                <div data-aos="fade-right" data-aos-anchor-placement="center-center" data-aos-delay="500" data-aos-duration="1000" className="header-bar"></div>
                {children}
            </div>
        </section>
    );
};

export default Container;