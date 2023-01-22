import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projects from './data/Projects.json';

import Container from './components/Container/Container';
import About from './sections/About/About';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio/Portfolio';
import Mask from './components/Mask/Mask';
import Contact from './sections/Contact/Contact';
import ModalWrap from './components/Mask/ModalWrap';

const App = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [cards, setCards] = useState(projects);

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return (
        <>
            <ModalWrap
                modal={activeModal}
                onClose={() => setActiveModal(false)}>
                <Mask card={cards.find(card => activeModal === card.name)} />
            </ModalWrap>

            <Home />

            <Container id='about' direction='right'>
                <About />
            </Container>

            <Container id='portfolio' direction='left'>
                <Portfolio cards={cards} setCards={setCards} setActiveModal={setActiveModal} />
            </Container>

            <Container id='contact' direction='right'>
                <Contact />
            </Container>
        </>
    );
};

export default App;