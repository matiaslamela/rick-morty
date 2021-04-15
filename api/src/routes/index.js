const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CharacterRoutes = require('./character');
const WeaponRoutes = require('./weapon');

const router = Router();

router.use('/character', CharacterRoutes);
router.use('/weapon', WeaponRoutes);

module.exports = router;
