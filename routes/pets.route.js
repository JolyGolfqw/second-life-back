const { Router } = require('express');
const { petsController } = require('../controllers/pets.controller');

const router = Router();

router.post('/pets', petsController.addPet);
router.get('/pets', petsController.getPets);

module.exports = router;