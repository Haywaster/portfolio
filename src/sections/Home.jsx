import { useEffect, useRef } from 'react';
import NavPanel from './NavPanel/NavPanel';

import Header from './Header/Header';

const Home = ({ sections, setSections }) => {
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
            <NavPanel sections={sections} />
        </section>
    );
};

export default Home;