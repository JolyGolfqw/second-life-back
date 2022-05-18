const { Router } = require('express');
const { sheltersController } = require('../controllers/shelters.controller');

const router = Router();

router.get('/shelters', sheltersController.getShelters);
router.post('/login', sheltersController.login);
router.post('/shelters', sheltersController.registration);

module.exports = router;