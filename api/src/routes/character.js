const {Router} = require('express');
const {getAllCharacters, addCharacter} = require('../Controllers/character');
const router = Router();

router.get('/', getAllCharacters);
router.post('/', addCharacter);

module.exports = router;
