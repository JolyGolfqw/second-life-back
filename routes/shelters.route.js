const { Router } = require('express');
const { sheltersController } = require('../controllers/shelters.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const imageMiddleware = require("../middlewares/image.middleware")

const router = Router();

router.get('/shelters', sheltersController.getShelters);
router.post('/login', sheltersController.login);
router.post('/shelters', imageMiddleware.single('img'), sheltersController.registration);
router.patch('/shelter/:id', imageMiddleware.single('img'), sheltersController.editShelter);


module.exports = router;