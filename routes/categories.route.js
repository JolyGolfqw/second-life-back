const { Router } = require('express')
const { categoriesController } = require('../controllers/categories.controller')

const router = Router()

router.post('/categories', categoriesController.addCategory)
router.get('/categories', categoriesController.getCategories)

module.exports = router