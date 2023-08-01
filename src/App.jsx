import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useCallback, useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import Container from './components/Container';
import ModalWrap from './components/ModalWrap';
import Modal from './components/ModalWrap/Modal';
import projects from './data/Projects.json';

import Spinner from './components/Spinner';
import { About } from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Home from './sections/Home';
import Portfolio from './sections/Portfolio';

const App = () => {
	const [cards, setCards] = useState(projects);
	const [activeModal, setActiveModal] = useState('');
	const [success, setSucces] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const activeCard = cards.find(card => activeModal === card.name);

	useEffect(() => {
		AOS.init({
			once: true,
			easing: 'ease-out-back'
		});
	}, []);

	const setClose = useCallback(() => {
		setActiveModal('');
		setSucces(false);
		setError(false);
	}, [activeModal, success, error]);

	return (
		<>
			<Helmet>
				<title>Vladimir Strashko - Frontend developer</title>

				<meta name='title' content='Vladimir Strashko - Frontend developer'></meta>
				<meta
					name='description'
					content='Vladimir Strashko creates beautiful UIs for users from all over the world 🚀. Sites for every taste✔️'
				></meta>

				<meta property='og:type' content='website'></meta>
				<meta property='og:title' content='Vladimir Strashko - Frontend developer'></meta>
				<meta
					property='og:description'
					content='Vladimir Strashko creates beautiful UIs for users from all over the world 🚀. Sites for every taste✔️'
				></meta>
				<meta property='og:url' content='http://vlstrashko.ru/'></meta>
				<meta property='og:image' content='http://vlstrashko.ru/img/me.webp'></meta>
			</Helmet>

			<ModalWrap
				modal={activeModal}
				success={success}
				error={error}
				loading={loading}
				onClose={() => setClose()}
			>
				{activeModal && <Modal tabIndex='0' activeCard={activeCard} />}

				{loading && (
					<div>
						<Spinner />
					</div>
				)}
				{success && (
					<>
						Your message was sent successfully.
						<br />
						Thanks!
					</>
				)}

				{error && (
					<>
						Your message was not delivered :(
						<br />
						Please contact via messenger
					</>
				)}
			</ModalWrap>

			<Home />

			<Container id='about' direction='right'>
				<About />
			</Container>

			<Container id='portfolio' direction='left'>
				<Portfolio cards={cards} setCards={setCards} setActiveModal={setActiveModal} />
			</Container>

			<Container id='contact' direction='right'>
				<Contact
					setSucces={setSucces}
					setError={setError}
					loading={loading}
					setLoading={setLoading}
				/>
			</Container>

			<Footer />
		</>
	);
};

export default App;
