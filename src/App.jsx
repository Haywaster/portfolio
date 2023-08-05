import React, { useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';

import { useSelector } from 'react-redux';
import { selectContactData } from './redux/slices/contactSlice';
import { selectProjectsData } from './redux/slices/projectsSlice';
import { selectSectionsData } from './redux/slices/sectionsSlice';

import { Container } from './components/Container';
import { Footer } from './sections/Footer';
import { Home } from './sections/Home';

import { ModalWrap } from './components/ModalWrap';
import Modal from './components/ModalWrap/ui/ModalContent/Modal';
import { Spinner } from './components/Spinner';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useActions } from './shared/lib/hooks/useActions';

const App = () => {
	const { activeCardData } = useSelector(selectProjectsData);
	const { statusMessage } = useSelector(selectContactData);
	const { sections } = useSelector(selectSectionsData);
	const { fetchSections, fetchAbout, fetchPortfolio, fetchContacts } = useActions();

	const containers = useMemo(() => sections?.slice(1), [sections]);

	useEffect(() => {
		Aos.init({
			once: true,
			easing: 'ease-out-back'
		});

		fetchSections();
		fetchAbout();
		fetchPortfolio();
		fetchContacts();
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

			{containers?.map((item, index) => (
				<Container key={item} id={item} direction={(index + 1) % 2 ? 'right' : 'left'} />
			))}

			<Footer />
		</>
	);
};

export default App;
