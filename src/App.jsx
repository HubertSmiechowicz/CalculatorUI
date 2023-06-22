import './App.css';
import React, { useEffect, useRef } from 'react';
import axios from 'axios';

function App() {
	console.log('Render');

	const placeHolderRef = useRef(null);
	const listFormuleRef = useRef(null);

	const writeOnPlaceHolder = (text) => {
		placeHolderRef.current.textContent += text;
	};

	const clearPlaceHolder = () => {
		placeHolderRef.current.textContent = '';
	};

	const substractOnPlaceHolder = () => {
		placeHolderRef.current.textContent =
			placeHolderRef.current.textContent.slice(0, -1);
	};

	const calculate = () => {
		axios
			.post(
				'https://localhost:7158/Calculator',
				JSON.stringify(placeHolderRef.current.textContent),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			)
			.then((response) => (placeHolderRef.current.textContent = response.data));
	};

	useEffect(() => {
		axios.get('https://localhost:7158/Formules').then((response) => {
			response.data.forEach((element) => {
				const liElement = document.createElement('li');
				liElement.classList.add('listElement');
				liElement.textContent = element.name + ': ' + element.formule;
				listFormuleRef.current.appendChild(liElement);
			});
		});
	}, []);

	return (
		<>
			<header>
				<h1>Kalkulator </h1>
				<div className='logo'>
					<i className='fa-solid fa-calculator'></i>
				</div>
			</header>
			<main>
				<section className='calculator'>
					<p ref={placeHolderRef} className='display'></p>
					<div>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									clearPlaceHolder();
								}
							}}>
							C
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									substractOnPlaceHolder();
								}
							}}>
							<i className='fa-solid fa-delete-left'></i>
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(' % ');
								}
							}}>
							%
						</button>
					</div>
					<div>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('7');
								}
							}}>
							7
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('8');
								}
							}}>
							8
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('9');
								}
							}}>
							9
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(' * ');
								}
							}}>
							x
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(' / ');
								}
							}}>
							<i className='fa-solid fa-divide'></i>
						</button>
					</div>
					<div>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('4');
								}
							}}>
							4
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('5');
								}
							}}>
							5
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('6');
								}
							}}>
							6
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('Pow');
								}
							}}>
							^
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(' - ');
								}
							}}>
							-
						</button>
					</div>
					<div>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('1');
								}
							}}>
							1
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('2');
								}
							}}>
							2
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('3');
								}
							}}>
							3
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('(');
								}
							}}>
							(
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(' + ');
								}
							}}>
							+
						</button>
					</div>
					<div>
					<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('.');
								}
							}}>
							.
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder('0');
								}
							}}>
							0
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(', ');
								}
							}}>
							,
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									writeOnPlaceHolder(')');
								}
							}}>
							)
						</button>
						<button
							className='key'
							onClick={() => {
								if (placeHolderRef) {
									calculate();
								}
							}}>
							=
						</button>
					</div>
				</section>
				<section className='mathematicalFormuls'>
					<ul ref={listFormuleRef} className='formulsList'></ul>
				</section>
			</main>

			<footer>Hubert Śmiechowicz 2023</footer>
		</>
	);
}

export default App;
