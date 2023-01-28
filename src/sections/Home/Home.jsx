import React, { useEffect, useState, memo } from 'react';
import { useInView } from 'react-intersection-observer';

import Header from '../Header';
import NavPanel from '../NavPanel';

const Home = () => {
    const [fixPanel, setFixPanel] = useState(true);
    const { ref, entry } = useInView();

    useEffect(() => {
        if (entry && !entry.isIntersecting) {
            setFixPanel(true)
        } else {
            setFixPanel(false)
        }
    }, [entry]);

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

export default memo(Home);