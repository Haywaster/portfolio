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

    useEffect(() => {
        AOS.init({
            once: true
        });
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const navFixedClassName = scroll >= header.current.clientHeight ? 'fixed' : null;
    const navClassNames = ['flex desk', navFixedClassName];

    return (
        <>
            <section
                id='home'
                ref={header}
                className="flex height-fix">
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

            <section id='portfolio'>
                <Container>
                    <h1>Секция с портфолио разработке</h1>
                </Container>
            </section>

            <section id='contact'>
                <Container>
                    <h1>Секция с контактами разработке</h1>
                </Container>
            </section>
        </>
    );
}

export default App;