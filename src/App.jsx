import { useEffect } from 'react';
import Container from './components/Container/Container';
import About from './sections/About/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './sections/Home';

function App() {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    return (
        <>
            <Home />
            {/* <section id='home' style={{ "height": "1200px", 'backgroundColor': 'blue' }}>Я ПРОСТО БЛОК</section>
            // <section id='about' style={{ "height": "1200px", 'backgroundColor': 'red' }}>Я ПРОСТО БЛОК</section>
            <section id='contact' style={{ "height": "1200px", 'backgroundColor': 'yellow' }}>Я ПРОСТО БЛОК</section>
            <section id='portfolio' style={{ "height": "1200px", 'backgroundColor': 'green' }}>Я ПРОСТО БЛОК</section> */}

            <Container id='about'>
                <About />
            </Container>

            <Container id='portfolio'>
                <h1>Секция с портфолио разработке</h1>
            </Container>

            <Container id='contact'>
                <h1>Секция с контактами разработке</h1>
            </Container>
        </>
    );
}

export default App;