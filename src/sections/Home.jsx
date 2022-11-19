import { useEffect, useRef } from 'react';
import Header from './Header/Header';
import NavPanel from './NavPanel/NavPanel';

const Home = ({ sections, setSections, activeSection, setActiveSection }) => {
    const myRef = useRef();

    useEffect(() => {
        setSections(prev => [...prev, myRef.current])
    }, [])

    return (
        <section
            id='home'
            ref={myRef}
            className="flex">
            <Header />
            <NavPanel sections={sections} activeSection={activeSection} setActiveSection={setActiveSection} />
        </section>
    );
};

export default Home;