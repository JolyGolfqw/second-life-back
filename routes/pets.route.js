const { Router } = require('express');
const { petsController } = require('../controllers/pets.controller');
const imageMiddleware = require('../middlewares/image.middleware');

const router = Router();

router.post('/pets', imageMiddleware.single('img'), petsController.addPet);
router.get('/pets', petsController.getPets);

module.exports = router;