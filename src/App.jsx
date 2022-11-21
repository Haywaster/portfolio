import { useState, useEffect } from 'react';
import Container from './components/Container/Container';
import About from './sections/About/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './sections/Home';

function App() {
    const [sections, setSections] = useState([])
    const [activeSection, setActiveSection] = useState(null)
    const [click, setClick] = useState(false)

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, [])

    return (
        <>
            <Home click={click} setClick={setClick} activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} setSections={setSections} />

            <Container setClick={setClick} click={click} activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} setSections={setSections} id={'about'}>
                <About />
            </Container>

            <Container setClick={setClick} click={click} activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} setSections={setSections} id={'portfolio'}>
                <h1>Секция с портфолио разработке</h1>
            </Container>

            <Container setClick={setClick} click={click} activeSection={activeSection} setActiveSection={setActiveSection} sections={sections} setSections={setSections} id={'contact'}>
                <h1>Секция с контактами разработке</h1>
            </Container>
        </>
    );
}

export default App;