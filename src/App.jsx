import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import { useSelector } from 'react-redux';
import { selectContactData } from './redux/slices/contactSlice';
import { selectProjectsData } from './redux/slices/projectsSlice';

import { Container } from './components/Container';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Home } from './sections/Home';
import { Portfolio } from './sections/Portfolio';

import { ModalWrap } from './components/ModalWrap';
import Modal from './components/ModalWrap/ui/Modal';
import { Spinner } from './components/Spinner';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
	const { activeCardData } = useSelector(selectProjectsData);
	const { statusMessage } = useSelector(selectContactData);

	useEffect(() => {
		AOS.init({
			once: true,
			easing: 'ease-out-back'
		});
	}, []);

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

			<ModalWrap>
				{activeCardData && <Modal tabIndex='0' activeCardData={activeCardData} />}
				{statusMessage === 'loading' && <Spinner />}
				{statusMessage === 'success' && (
					<>
						Your message was sent successfully.
						<br />
						Thanks!
					</>
				)}
				{statusMessage === 'error' && (
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
				<Portfolio />
			</Container>

			<Container id='contact' direction='right'>
				<Contact />
			</Container>

			<Footer />
		</>
	);
};

export default App;
