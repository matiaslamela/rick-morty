import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

/*

componente que va a ser un contenedor de las tarjetas de los perros

store de redux

{
  data,
}

*/
function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/character/')
			.then((characters) => setCharacters(characters.data));
	}, []);
	let charactersData = characters.map((character) => {
		return (
			<div>
				<p>{character.name}</p>
			</div>
		);
	});
	return <div className="App">{charactersData}</div>;
}

export default App;

/*
cliente ---> 3000
servidor ----> 3001
*/