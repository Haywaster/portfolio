import React, { useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';

import { useSelector } from 'react-redux';
import { selectContactData } from './redux/slices/contactSlice';
import { selectPortfolioData } from './redux/slices/portfolioSlice';
import { selectSectionsData } from './redux/slices/sectionsSlice';

import { Container } from './components/Container';
import { Footer } from './sections/Footer';
import { Home } from './sections/Home';

import { ModalWrap } from './components/ModalWrap';
import Modal from './components/ModalWrap/ui/ModalContent/Modal';
import { Spinner } from './components/Spinner';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { selectData } from './redux/slices/dataSlice';
import { useActions } from './shared/lib/hooks/useActions';

const App = () => {
	const { process, languageData, language } = useSelector(selectData);
	const { fetchData, setAbout, setSections, setPortfolio, setContacts } = useActions();

	useEffect(() => {
		Aos.init({
			once: true,
			easing: 'ease-out-back'
		});
		fetchData();
	}, []);

	useEffect(() => {
		if (languageData) {
			setSections(languageData.sections);
			setAbout(languageData.about);
			setPortfolio(languageData.portfolio);
			setContacts(languageData.contact);
		}
	}, [process, language]);

	return (
		<>
			{process === 'loading' && (
				<div className='spinnerWrap'>
					<Spinner />
					<p style={{ alignContent: 'start' }}>Пожалуйста, ожидайте. Страница загружается</p>
				</div>
			)}
			{process === 'success' && <Resource />}
		</>
	);
};

const Resource = () => {
	const { sections } = useSelector(selectSectionsData);
	const { activeCardData } = useSelector(selectPortfolioData);
	const { statusMessage } = useSelector(selectContactData);

	const containers = useMemo(() => sections.slice(1), [sections]);
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

			{containers.map((item, index) => (
				<Container
					key={item.id}
					id={item.id}
					name={item.name}
					direction={(index + 1) % 2 ? 'right' : 'left'}
				/>
			))}

			<Footer />
		</>
	);
};

export default App;
