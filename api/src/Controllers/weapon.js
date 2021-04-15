const {Weapon} = require('../db');
const {v4: uuidv4} = require('uuid');
/*
weapons
-agregar un arma(body)
-la arma de un personaje(id)
-borrar un arma(id)
-editar un arma(id, body)
*/

async function addWeapon(request, response, next) {
	const id = uuidv4();
	const weaponBody = {...request.body, id};
	if (!weaponBody)
		return response.send({
			error: 500,
			message: 'Necesitas enviar en el body algo',
		});
	try {
		const createdWeapon = await Weapon.create(weaponBody);
		return response.send(createdWeapon);
	} catch (error) {
		next(error);
	}
}

function getAllWeapons(request, response, next) {
	return Weapon.findAll()
		.then((weapons) => response.send(weapons))
		.catch((err) => next(err));
}

module.exports = {
	getAllWeapons,
	addWeapon,
};
