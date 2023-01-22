import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import projects from './data/Projects.json';

import Container from './components/Container/Container';
import About from './sections/About/About';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio/Portfolio';
import Mask from './components/ModalWrap/Mask';
import Contact from './sections/Contact/Contact';
import ModalWrap from './components/ModalWrap/ModalWrap';
import SuccesModal from './components/ModalWrap/SuccesModal';
import ErrorModal from './components/ModalWrap/ErrorModal';

const App = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [success, setSucces] = useState(false);
    const [error, setError] = useState(false);
    const [cards, setCards] = useState(projects);

    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    const setClose = () => {
        setActiveModal(false)
        setSucces(false)
        setError(false)
    }

    return (
        <>
            <ModalWrap
                modal={activeModal}
                success={success}
                error={error}
                onClose={() => setClose()}>
                {activeModal && <Mask card={cards.find(card => activeModal === card.name)} />}
                {success && <SuccesModal />}
                {error && <ErrorModal />}
            </ModalWrap>

            <Home />

            <Container id='about' direction='right'>
                <About />
            </Container>

            <Container id='portfolio' direction='left'>
                <Portfolio cards={cards} setCards={setCards} setActiveModal={setActiveModal} />
            </Container>

            <Container id='contact' direction='right'>
                <Contact setSucces={setSucces} setError={setError} />
            </Container>
        </>
    );
};

export default App;