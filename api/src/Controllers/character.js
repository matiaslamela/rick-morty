const {Character} = require('../db');
const axios = require('axios');
const {BASE_URL, CHARACTER_URL} = require('../../constants');
const {v4: uuidv4} = require('uuid');
/*
characters
-traerme todos los characters mios y de la api
-traerme un solo character(id)
-agregar un character(body)
-editar(id, body)
--borrar(id)
*/

async function addCharacter(request, response, next) {
	const id = uuidv4();
	const characterBody = {...request.body, id};
	try {
		const createdCharacter = await Character.create(characterBody);
		return response.send(createdCharacter);
	} catch (error) {
		next(error);
	}
}

function getAllCharacters(request, res, next) {
	const characterApi = axios.get(`${BASE_URL}${CHARACTER_URL}`);
	const characterMine = Character.findAll();
	Promise.all([characterApi, characterMine])
		.then((response) => {
			let [characterApiResponse, characterMineResponse] = response;
			return res.send(
				characterMineResponse.concat(characterApiResponse.data.results)
			);
		})
		.catch((err) => next(err));
}

module.exports = {
	addCharacter,
	getAllCharacters,
};
