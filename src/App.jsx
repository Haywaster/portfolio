import { useState, useEffect, useRef } from 'react';
import Header from './components/sections/Header/Header';
import Container from './components/Container/Container';
import About from './components/sections/About/About';
import NavPanel from './components/sections/NavPanel/NavPanel';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    const [scroll, setScroll] = useState(0);
    const header = useRef(1);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    AOS.init({
        once: true
    });

    // useEffect(() => {
    //     AOS.init({
    //         once: true
    //     });
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [])

    const navFixedClassName = scroll >= header.current.clientHeight ? 'fixed' : null;
    const navClassNames = ['flex desk', navFixedClassName];

    return (
        <div onAnimationEnd={() => console.log(321)} className="App">
            <section ref={header} id='home' className="flex height-fix">
                <Header />
                <nav className={navClassNames.join(' ')}>
                    <NavPanel />
                </nav>
            </section>

            <section id='about'>
                <Container>
                    <About />
                </Container>
            </section>
        </div>
    );
}

export default App;
