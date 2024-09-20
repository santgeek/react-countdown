import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   
import { faClock } from '@fortawesome/free-regular-svg-icons';


//create your first component
const Home = () => {

	const [number1, setNumber1] = useState(0)

	//let timerArray = [];

	useEffect(() => {
		let intervalID = setInterval(() => {
			setNumber1(prevNumber => prevNumber + 1)
		}, 1000);
		return () => clearInterval(intervalID)
	}, [number1])

	let numberBoxes = number1.toString().padStart(6, 0)

	// convertir numberBoxes en un array e imprimirlo como etiqueta h1
	let singleNumbersArray = numberBoxes.toString().split('').map((singleNumber, index) => (
		<div key={index} className="rounded-2 mt-5 p-2 pt-3 pb-3 bg-dark text-white mx-2 border border-light">
			<h1>{singleNumber}</h1>
		</div>

	))

	return (
		<div className="container text-center">
			<div className="row bg-dark pb-5">
				<div className="col d-flex justify-content-center">
					<div className="display-5 rounded-2 mt-5 p-2 pt-3 pb-3 bg-dark text-white mx-2 border border-light border-1">
						<FontAwesomeIcon icon={faClock} />
					</div>
					<div className="d-flex">
						{singleNumbersArray}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

