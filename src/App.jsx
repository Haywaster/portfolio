import { useEffect } from 'react';
import Container from './components/Container/Container';
import About from './sections/About/About';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio/Portfolio';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return (
        <>
            <Home />

            <Container id='about' direction='right'>
                <About />
            </Container>

            <Container id='portfolio' direction='left'>
                <Portfolio />
            </Container>

            <Container id='contact' direction='right'>
                <h1>Секция c контактами в разработке</h1>
                <br />
                <h2><a target='_blank' href="https://github.com/Haywaster" rel="noreferrer">GITHUB</a></h2>
            </Container>
        </>
    );
};

export default App;