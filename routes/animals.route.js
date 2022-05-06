const { Router } = require('express');
const { animalController } = require('../controllers/animals.controller');

const router = Router();

router.post('/animals', animalController.addAnimal);
router.get('/animals', animalController.getAnimals);

module.exports = router;