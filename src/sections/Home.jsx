import { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import Header from './Header/Header';
import NavPanel from './NavPanel/NavPanel';

const Home = ({ click, sections, setSections, activeSection, setActiveSection, setClick }) => {
    const myRef = useRef();

    const { ref: inViewRef } = useInView({
        triggerOnce: false,
        threshold: 0.75,
        skip: click,
        onChange: (inView) => {
            if (inView) {
                setActiveSection('home')
            }
        },
    });

    const setRefs = useCallback((node) => {
        myRef.current = node
        inViewRef(node);
    }, [inViewRef])

    useEffect(() => {
        setSections(prev => [...prev, myRef.current])
    }, [])

    return (
        <section
            id='home'
            ref={setRefs}
            className="flex">
            <Header />
            <NavPanel sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} setClick={setClick} />
        </section>
    );
};

export default Home;