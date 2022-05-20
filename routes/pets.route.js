const { Router } = require('express');
const { petsController } = require('../controllers/pets.controller');
const imageMiddleware = require('../middlewares/image.middleware');

const router = Router();

router.post('/pets', imageMiddleware.single('img'), petsController.addPet);
router.get('/pets', petsController.getPets);
router.get('/shelter-pets', petsController.getShelterPets);
router.get("/pets/type/:id", petsController.getPetsByType);


module.exports = router;