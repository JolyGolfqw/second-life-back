const {Router} = require('express')
const { newsController } = require('../controllers/news.controller')
const imageMiddleware = require('../middlewares/image.middleware')

const router = Router()

router.post('/news', imageMiddleware.single('img'), newsController.addNews)
router.get('/news', newsController.getNews)

module.exports = router