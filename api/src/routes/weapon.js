const {Router} = require('express');
const {getAllWeapons, addWeapon} = require('../Controllers/weapon');
const router = Router();

router.get('/', getAllWeapons);
router.post('/', addWeapon);

module.exports = router;

/*

cliente ----> evento en el servidor ---> llegue a la ruta ---> me aplique los middlewares -->controlador

characters
-traerme todos los characters mios y de la api
-traerme un solo character(id)
-agregar un character(body)
-editar(id, body)
--borrar(id)

weapons
-agregar un arma(body)
-todas las armas
-la arma de un personaje(id)
-borrar un arma(id)
-editar un arma(id, body)

*/
