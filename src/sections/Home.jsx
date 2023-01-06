import React, { useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Header from './Header/Header';
import NavPanel from './NavPanel/NavPanel';

const Home = () => {
    const [fixPanel, setFixPanel] = useState(false)
    const { ref, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    useEffect(() => {
        if (entry && !entry.isIntersecting) {
            setFixPanel(true)
        } else {
            setFixPanel(false)
        }
    }, [entry])

    return (
        <section
            ref={ref}
            id='home'
            className="flex">
            <Header />
            <NavPanel fixPanel={fixPanel} />
        </section>
    );
};

export default Home;