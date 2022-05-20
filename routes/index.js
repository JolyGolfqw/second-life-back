const {Router} = require('express')

const router = Router()

router.use(require('./categories.route'))
router.use(require('./pets.route'))
router.use(require('./shelters.route'))
router.use(require('./petsKeeping.route'))
router.use(require('./fundraisings.route'))
router.use(require('./news.route'))
router.use(require('./gallery.route'))

module.exports = router