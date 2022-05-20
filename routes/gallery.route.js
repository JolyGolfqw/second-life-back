const {Router} = require('express')
const { galleryController } = require('../controllers/gallery.controller')
const imageMiddleware = require('../middlewares/image.middleware')

const router = Router()

router.post('/gallery', imageMiddleware.single('img'), galleryController.addPhoto)
router.get('/gallery', galleryController.getImages)
router.delete('/gallery/:id', galleryController.deleteImage)

module.exports = router